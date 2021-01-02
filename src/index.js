import { findCorruptAccounts } from './core/corrupt';
import { findMissingAccounts } from './core/missing';
import { findNewAccounts } from './core/new';
import AccountDatabase from './db/db';
import { inflate } from './utils/utils'

const newAccountDatabase = new AccountDatabase("NEW");
const oldAccountDatabase = new AccountDatabase("OLD");

async function main() {

    //Ideally make these Debug logging levels
    console.log("Attemping to grab records from Old and New Account Databases");
    const newAccountRecordsPromise = inflate(await newAccountDatabase.findAll());
    const oldAccountRecordsPromise = inflate(await oldAccountDatabase.findAll());

    const [oldAccountRecords, newAccountRecords] = Promise.all([oldAccountRecordsPromise, newAccountRecordsPromise]);
    console.log("Got all Accounts");

    console.log("Going to find Missing Accounts");    
    const missingAccounts = findMissingAccounts(oldAccountRecords, newAccountRecords);

    console.log("Going to find New Accounts");
    const newAccounts = findNewAccounts(oldAccountRecords, newAccountRecords);

    console.log("Going to find Corrupt Accounts");
    const corruptAccounts = getCorruptAccountsWithCorrectedInfo(oldAccountRecords, newAccountRecords);

    Promise.all([missingAccounts, newAccounts, corruptAccounts])
    .then(([missingAccounts, newAccounts, corruptAccounts]) => {
        console.log("Found all Missing, New, and Corrupt Accounts!");
        console.log("Beginning Report Generation");
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