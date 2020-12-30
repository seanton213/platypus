import { findMissingAccounts } from './core/missing';
import { findNewAccounts } from './core/new';
import AccountDatabase from './db/db';
import { inflate, keysToSet } from './utils/utils'

const newAccountDatabase = new AccountDatabase("NEW");
const oldAccountDatabase = new AccountDatabase("OLD");

async function main() {

    // TODO: possibly chunk loading into memory
    const newAccounts = inflate(newAccountDatabase.findAll());
    const oldAccounts = inflate(oldAccountDatabase.findAll());

    // TODO: util function to flatten to only IDs (SET)
    const newAccountIds = keysToSet(newAccounts);
    const oldAccountIds = keysToSet(oldAccounts);

    const missingAccountIds = findMissingAccounts(oldAccountIds, newAccountIds);
    const newAccountIds = findNewAccounts(oldAccountIds, newAccountIds);

    Promise.all([missingAccountIds, newAccountIds]);
    // TODO: Filter out from oldAccounts the records in the missingRecords Set/ common filter function

    // TODO: Filter out from newAccounts the records in the newRecords Set

    // TODO: Perform Corrupt check

    console.log("Hello world!");
}

// (async () => {
//     try {
//         await main();
//     } catch (e) {
//         console.error(e);
//     }
// })();