import { getCorruptAccountsWithCorrectedInfo } from './core/corrupt';
import { findMissingAccounts } from './core/missing';
import { findNewAccounts } from './core/new';
import Report from './core/Report';
import AccountDatabase from './db/db';
import { inflate } from './utils/utils'

const newAccountDatabase = new AccountDatabase("NEW");
const oldAccountDatabase = new AccountDatabase("OLD");

async function main() {

    //Ideally make these Debug logging levels. Included these console.logs to help the user see what's happening
    console.log("Attemping to grab records from Old and New Account Databases");

    const newAccountRecordsPromise = inflate(await newAccountDatabase.findAll(), "id");
    const oldAccountRecordsPromise = inflate(await oldAccountDatabase.findAll(), "id");

    const [oldAccountRecords, newAccountRecords] = await Promise.all([oldAccountRecordsPromise, newAccountRecordsPromise]);
    console.log("Got all Accounts");

    console.log("Going to find Missing Accounts");    
    const missingAccounts = findMissingAccounts(oldAccountRecords, newAccountRecords);

    console.log("Going to find New Accounts");
    const newAccounts = findNewAccounts(oldAccountRecords, newAccountRecords);

    console.log("Going to find Corrupt Accounts");
    const corruptAccounts = getCorruptAccountsWithCorrectedInfo(oldAccountRecords, newAccountRecords);

    Promise.all([missingAccounts, corruptAccounts, newAccounts])
        .then(async ([resultOne, resultTwo, resultThree]) => {
            console.log("Found all Missing, New, and Corrupt Accounts!");
            console.log("Beginning Report Generation");

            const reportGenerator = new Report(resultOne.missingAccounts, resultTwo.corruptAccountsWithCorrectedInfo, resultThree.newAccounts);
            await reportGenerator.generate();

            console.log("Report generation completed!");
        })
        .catch(e => {
            console.log("Generating Account Migration Report failed", e);
        });
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
    }
})();