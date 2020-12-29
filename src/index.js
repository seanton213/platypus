import AccountDatabase from './db/db';

const newAccountDatabase = new AccountDatabase("NEW");
const oldAccountDatabase = new AccountDatabase("OLD");

async function main() {

    console.log("Hello world!");
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
    }
})();