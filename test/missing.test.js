import { findMissingAccounts } from "../src/core/missing";
import 'regenerator-runtime/runtime';

test("findMissingAccounts should do find records that don't exist in new accounts", async () => {
    const newAccountsAfterInflate = {2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await findMissingAccounts(oldAccountsAfterInflate, newAccountsAfterInflate);
    const missingAccounts = result.missingAccounts;

    expect(missingAccounts.length).toEqual(1);
    expect(missingAccounts[0].id).toEqual(1);
    expect(missingAccounts[0].name).toEqual("Sean");
    expect(missingAccounts[0].email).toEqual("seanton213@gmail.com");
});

test("findMissingAccounts should not find any records that don't exist in old and new databases", async () => {
    const newAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};
    const oldAccountsAfterInflate = {1: { id: 1, name: "Sean", email: "seanton213@gmail.com" }, 2: { id: 2, name: "Obama", email: "obama@usa.gov" }};

    const result = await findMissingAccounts(oldAccountsAfterInflate, newAccountsAfterInflate);
    const missingAccounts = result.missingAccounts;

    expect(missingAccounts).toEqual([]);
});
