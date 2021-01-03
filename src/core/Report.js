import { promises as fsPromise } from 'fs';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const REPORT_DIRECTORY = "output";
const REPORT_FILE_NAME = "output/report.pdf"

const MISSING_ACCOUNTS_CSV_FILE_NAME = "output/missing.csv";
const CORRUPT_ACCOUNTS_CSV_FILE_NAME = "output/corrupt.csv";
const NEW_ACCOUNTS_CSV_FILE_NAME = "output/new.csv";

const PDF_DOC_TEXT = {
    missing: "Unfortunately, there were some accounts that didn't make it into the new database. Please create SQL inserts using missing.csv",
    corrupt: "Unfortunately, there were some accounts that were corrupted in the migration. We've identified the affected accounts and have included them in corrupt.csv with the corrupted data and the correct data. In the new database, please delete the entities corresponding to the IDs before making inserts of the corrected data. PLEASE DO THIS BEFORE ADDING ANY MISSING ACCOUNTS. The database will default the favorite flavor to chocolate upon insert because we don't know for sure if the inputted favorite flavor is accurate.",
    new: "Congrats! Looks like there were some new accounts in the migration. You can see the data in new.csv"
};

class Report {
    constructor(missingAccounts, corruptAccounts, newAccounts) {
        this.missingAccounts = missingAccounts;
        this.corruptAccounts = corruptAccounts;
        this.newAccounts = newAccounts;
    }

    async generate() {
        await fsPromise.rmdir(REPORT_DIRECTORY, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
        });

        await fsPromise.mkdir(REPORT_DIRECTORY, (err) => {
            if (err) {
                throw err;
            }
        });

        this.generatePdfReport(this.missingAccounts.length, this.corruptAccounts.length, this.newAccounts.length);
        await this.generateNewAccountsCsv();
        await this.generateCorruptAccountsCsv();
        await this.generateMissingAccountsCsv();
    }

    generatePdfReport(numOfMissingAccounts, numOfCorruptAccounts, numOfNewAccounts) {
        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream(REPORT_FILE_NAME));
        pdfDoc.text("Account Migration Report", { align: 'center', underline: true });
        pdfDoc.moveDown();

        pdfDoc.text("Below is a list of instructions for the results we found", { align: 'center'});

        this.addTextToReport(pdfDoc, numOfMissingAccounts, numOfCorruptAccounts, numOfNewAccounts);
        
        pdfDoc.end();
    }

    addTextToReport(pdfDoc, numOfMissingAccounts, numOfCorruptAccounts, numOfNewAccounts) {
        pdfDoc.text("New Accounts:", { align: 'left', underline: true });
        if (numOfNewAccounts && numOfNewAccounts > 0) {
            pdfDoc.text("Number of New Accounts is " + numOfNewAccounts, { align: 'left' });
            pdfDoc.moveDown();
            pdfDoc.text(PDF_DOC_TEXT.new, { align: 'left' });
        } else {
            pdfDoc.text("No New Accounts were found!", { align: 'left' });
        }

        pdfDoc.moveDown();
        pdfDoc.moveDown();

        pdfDoc.text("Corrupt Accounts:", { align: 'left', underline: true });
        if (numOfCorruptAccounts && numOfCorruptAccounts > 0) {
            pdfDoc.text("Number of Corrupt Accounts is " + numOfCorruptAccounts, { align: 'left' });
            pdfDoc.moveDown();
            pdfDoc.text(PDF_DOC_TEXT.corrupt, { align: 'left' });
        } else {
            pdfDoc.text("No Corrupt Accounts were found!", { align: 'left' });
        }

        pdfDoc.moveDown();
        pdfDoc.moveDown();

        pdfDoc.text("Missing Accounts:", { align: 'left', underline: true });
        if (numOfMissingAccounts && numOfMissingAccounts > 0) {
            pdfDoc.text("Number of Missing Accounts is " + numOfMissingAccounts, { align: 'left' });
            pdfDoc.moveDown();
            pdfDoc.text(PDF_DOC_TEXT.missing, { align: 'left' });
        } else {
            pdfDoc.text("No Missing Accounts were found!", { align: 'left' });
        }
    }

    async generateNewAccountsCsv() {
        if (this.newAccounts && this.newAccounts.length > 0) {
            const csvWriter = createCsvWriter({
                path: NEW_ACCOUNTS_CSV_FILE_NAME,
                header: [
                    {id: 'id', title: 'ID'},
                    {id: 'name', title: 'NAME'},
                    {id: 'email', title: 'EMAIL'},
                    {id: 'favoriteFlavor', title: 'FAVORITE FLAVOR'}
                ]
            });
    
            await csvWriter.writeRecords(this.newAccounts);
        }
    }

    async generateCorruptAccountsCsv() {
        if (this.corruptAccounts && this.corruptAccounts.length > 0) {
            const csvWriter = createCsvWriter({
                path: CORRUPT_ACCOUNTS_CSV_FILE_NAME,
                header: [
                    {id: 'id', title: 'ID'},
                    {id: 'corruptedName', title: 'CORRUPTED NAME'},
                    {id: 'correctName', title: 'CORRECT NAME'},
                    {id: 'corruptedEmail', title: 'CORRUPTED EMAIL'},
                    {id: 'correctEmail', title: 'CORRECT NAME'},
                    {id: 'inputtedFavoriteFlavor', title: 'INPUTTED FAVORITE FLAVOR'}
                ]
            });
    
            await csvWriter.writeRecords(this.corruptAccounts);
        }
    }

    async generateMissingAccountsCsv() {
        if (this.missingAccounts && this.missingAccounts.length > 0) {
            const csvWriter = createCsvWriter({
                path: MISSING_ACCOUNTS_CSV_FILE_NAME,
                header: [
                    {id: 'id', title: 'ID'},
                    {id: 'name', title: 'NAME'},
                    {id: 'email', title: 'EMAIL'}
                ]
            });
    
            await csvWriter.writeRecords(this.missingAccounts);
        }
    }
}


export default Report;