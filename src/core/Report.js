class Report {
    constructor(missingAccounts, corruptAccounts, newAccounts) {
        this.missingAccounts = missingAccounts;
        this.corruptAccounts = corruptAccounts;
        this.newAccounts = newAccounts;
    }

    generate() {
        console.table({"missing": this.missingAccounts.length, "corrupt": this.corruptAccounts.length, "new": this.newAccounts.length});
    }
}


export default Report;