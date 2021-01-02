import { findCorruptAccounts } from './core/corrupt';
import { findMissingAccounts } from './core/missing';
import { findNewAccounts } from './core/new';
import AccountDatabase from './db/db';
import { inflate } from './utils/utils'

const newAccountDatabase = new AccountDatabase("NEW");
const oldAccountDatabase = new AccountDatabase("OLD");

async function main() {

    const newAccountRecords = inflate(newAccountDatabase.findAll());
    const oldAccountRecords = inflate(oldAccountDatabase.findAll());

    const missingAccounts = findMissingAccounts(oldAccountRecords, newAccountRecords);
    const newAccounts = findNewAccounts(oldAccountRecords, newAccountRecords);
    const corruptAccounts = findCorruptAccounts(oldAccountRecords, newAccountRecords);

    Promise.all([missingAccounts, newAccounts, corruptAccounts])
    .then(([missingAccounts, newAccounts, corruptAccounts]) => {
        console.log("");
    })
    .catch(e => {
        console.log("Generating Account Migration Report failed", e);
    });
}

// (async () => {
//     try {
//         await main();
//     } catch (e) {
//         console.error(e);
//     }
// })();