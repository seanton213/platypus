import { findNewAccounts } from '../src/core/new';
import 'regenerator-runtime/runtime';

test("findNewAccounts should do find records that don't exist in old accounts database", async () => {
    const oldAccountsAfterInflate = {2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const newAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    
    const result = await findNewAccounts(oldAccountsAfterInflate, newAccountsAfterInflate);
    const newAccounts = result.newAccounts;

    expect(newAccounts.length).toEqual(1);
    expect(newAccounts[0].id).toEqual(1);
    expect(newAccounts[0].name).toEqual("Sean");
    expect(newAccounts[0].email).toEqual("seanton213@gmail.com");
});

test("findNewAccounts should not find any records that don't exist in old and new databases", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await findNewAccounts(oldAccountsAfterInflate, newAccountsAfterInflate);
    const newAccounts = result.newAccounts;

    expect(newAccounts).toEqual([]);
});