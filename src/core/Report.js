class Report {
    constructor() {
        this.missingAccounts = [];
        this.corruptAccounts = [];
        this.newAccounts = [];
    }

    setMissingAccounts(missingAccounts) {
        this.missingAccounts = missingAccounts;
    }

    setCorruptAccounts(corruptAccounts) {
        this.corruptAccounts = corruptAccounts;
    }
    
    setNewAccounts(newAccounts) {
        this.newAccounts = newAccounts;
    }

    generate() {
        console.table({"missing": this.missingAccounts.length, "corrupt": this.corruptAccounts.length, "new": this.newAccounts.length});
    }
}


export default Report;