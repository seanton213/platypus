async function findMissingAccounts(oldAccountIdsSet, newAccountIdsSet) {
    let missingAccountIds = [];

    oldAccountIdsSet.forEach(oldAccountId => {
        if (!newAccountIdsSet.has(oldAccountId)) {
            missingAccountIds.append(oldAccountId);
        }
    });

    return missingAccountIds;
}


export { findMissingAccounts };