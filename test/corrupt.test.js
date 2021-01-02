import { getCorruptAccountsWithCorrectedInfo } from '../src/core/corrupt';
import 'regenerator-runtime/runtime';

test("getCorruptAccountsWithCorrectedInfo should find record with corrupted name", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Naes", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await getCorruptAccountsWithCorrectedInfo(oldAccountsAfterInflate, newAccountsAfterInflate);
    const corruptAccountsWithCorrectedInfo = result.corruptAccountsWithCorrectedInfo;

    expect(corruptAccountsWithCorrectedInfo.length).toEqual(1);
    expect(corruptAccountsWithCorrectedInfo[0][1].corruptedData.name).toEqual("Naes");
    expect(corruptAccountsWithCorrectedInfo[0][1].correctData.name).toEqual("Sean");
});

test("getCorruptAccountsWithCorrectedInfo should find record with corrupted email", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213333@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await getCorruptAccountsWithCorrectedInfo(oldAccountsAfterInflate, newAccountsAfterInflate);
    const corruptAccountsWithCorrectedInfo = result.corruptAccountsWithCorrectedInfo;

    expect(corruptAccountsWithCorrectedInfo.length).toEqual(1);
    expect(corruptAccountsWithCorrectedInfo[0][1].corruptedData.email).toEqual("seanton213333@gmail.com");
    expect(corruptAccountsWithCorrectedInfo[0][1].correctData.email).toEqual("seanton213@gmail.com");
});

test("getCorruptAccountsWithCorrectedInfo should find record with corrupted name and email", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Naes", email: "seanton213333@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await getCorruptAccountsWithCorrectedInfo(oldAccountsAfterInflate, newAccountsAfterInflate);
    const corruptAccountsWithCorrectedInfo = result.corruptAccountsWithCorrectedInfo;

    expect(corruptAccountsWithCorrectedInfo.length).toEqual(1);
    expect(corruptAccountsWithCorrectedInfo[0][1].corruptedData.name).toEqual("Naes");
    expect(corruptAccountsWithCorrectedInfo[0][1].correctData.name).toEqual("Sean");
    expect(corruptAccountsWithCorrectedInfo[0][1].corruptedData.email).toEqual("seanton213333@gmail.com");
    expect(corruptAccountsWithCorrectedInfo[0][1].correctData.email).toEqual("seanton213@gmail.com");
});

test("getCorruptAccountsWithCorrectedInfo should find record with corrupted data, but not find a missing record ", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Naes", email: "seanton213@gmail.com" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await getCorruptAccountsWithCorrectedInfo(oldAccountsAfterInflate, newAccountsAfterInflate);
    const corruptAccountsWithCorrectedInfo = result.corruptAccountsWithCorrectedInfo;

    expect(corruptAccountsWithCorrectedInfo.length).toEqual(1);
    expect(corruptAccountsWithCorrectedInfo[0][1].corruptedData.name).toEqual("Naes");
    expect(corruptAccountsWithCorrectedInfo[0][1].correctData.name).toEqual("Sean");
});

test("getCorruptAccountsWithCorrectedInfo should find record with corrupted data, but not find a new record ", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Naes", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }};

    const result = await getCorruptAccountsWithCorrectedInfo(oldAccountsAfterInflate, newAccountsAfterInflate);
    const corruptAccountsWithCorrectedInfo = result.corruptAccountsWithCorrectedInfo;

    expect(corruptAccountsWithCorrectedInfo.length).toEqual(1);
    expect(corruptAccountsWithCorrectedInfo[0][1].corruptedData.name).toEqual("Naes");
    expect(corruptAccountsWithCorrectedInfo[0][1].correctData.name).toEqual("Sean");
});

test("getCorruptAccountsWithCorrectedInfo should not find any corrupted records", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await getCorruptAccountsWithCorrectedInfo(oldAccountsAfterInflate, newAccountsAfterInflate);
    const corruptAccountsWithCorrectedInfo = result.corruptAccountsWithCorrectedInfo;

    expect(corruptAccountsWithCorrectedInfo).toEqual([]);
});