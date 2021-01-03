async function getCorruptAccountsWithCorrectedInfo(oldAccountRecords, newAccountRecords) {
    let corruptAccountsWithCorrectedInfo = [];

    for (const [key, value] of Object.entries(oldAccountRecords)) {
        if (newAccountRecords.hasOwnProperty(key)) {
            const isCorrupted = isRecordCorrupt(value, newAccountRecords[key]);
            if (isCorrupted) {
                corruptAccountsWithCorrectedInfo.push(buildCorruptAndCorrectedInfo(key, value, newAccountRecords[key]));
            }
        }
    }

    return { corruptAccountsWithCorrectedInfo };
}

function isRecordCorrupt(oldAccountRecord, newAccountRecord) {
    return oldAccountRecord.name !== newAccountRecord.name || oldAccountRecord.email !== newAccountRecord.email;
}

function buildCorruptAndCorrectedInfo(accountId, oldAccountData, corruptedData) {
    return { 
        id: accountId, 
        corruptedName: corruptedData.name, 
        correctName: oldAccountData.name,
        corruptedEmail: corruptedData.email,
        correctEmail: oldAccountData.email,
        inputtedFavoriteFlavor: corruptedData.favoriteFlavor
    };
}

export { getCorruptAccountsWithCorrectedInfo };
