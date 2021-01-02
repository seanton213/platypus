async function findMissingAccounts(oldAccountRecords, newAccountRecords) {
    let missingAccounts = [];

    for (const [key, value] of Object.entries(oldAccountRecords)) {
        if (!newAccountRecords.hasOwnProperty(key)) {
            missingAccounts.push(value);
        }
    }

    return { missingAccounts };
}


export { findMissingAccounts };