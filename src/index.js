import AccountDatabase from './db/db';

const newAccountDatabase = new AccountDatabase("NEW");
const oldAccountDatabase = new AccountDatabase("OLD");

async function main() {
    const newAccounts = inflate(newAccountDatabase.findAll());
    const oldAccounts = inflate(oldAccountDatabase.findAll());

    // if we don't find old in new. Add to missing Record

    //once we find something that exists in both, then remove from both

    console.log("Hello world!");
}

// (async () => {
//     try {
//         await main();
//     } catch (e) {
//         console.error(e);
//     }
// })();