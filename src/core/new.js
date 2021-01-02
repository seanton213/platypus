async function findNewAccounts(oldAccountRecords, newAccountRecords) {
    let newAccounts = [];

    for (const [key, value] of Object.entries(newAccountRecords)) {
        if (!oldAccountRecords.hasOwnProperty(key)) {
            newAccounts.push(value);
        }
    }

    return { newAccounts };
}

export { findNewAccounts }
