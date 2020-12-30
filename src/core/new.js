async function findNewAccounts(oldAccountIdsSet, newAccountIdsSet) {
    let newAccountIds = [];

    newAccountIdsSet.forEach(newAccountId => {
        if (!oldAccountIdsSet.has(newAccountId)) {
            newAccountIds.append(newAccountId);
        }
    });

    return newAccountIds;
}

export { findNewAccounts }