import { findMissingAccounts } from "../src/core/missing";

test("findMissingAccounts should do find records that don't exist in new accounts", () => {
    const newAccounts = {2: { name: "Obama", email: "obama@usa.gov" }};
    const oldAccounts = {1: { name: "Sean", email: "seanton213@gmail.com" }, 2: { name: "Obama", email: "obama@usa.gov" }};

    const result = findMissingAccounts();
});

test("findMissingAccounts should not find any records that don't exist in old and new databases", () => {
    const newAccounts = {1: { name: "Sean", email: "seanton213@gmail.com" }, 2: { name: "Obama", email: "obama@usa.gov" }};
    const oldAccounts = {1: { name: "Sean", email: "seanton213@gmail.com" }, 2: { name: "Obama", email: "obama@usa.gov" }};
})