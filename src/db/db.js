import { PrismaClient as NewPrismaClient } from '../generated/newClient';
import { PrismaClient as OldPrismaClient } from '../generated/oldClient';

const newPrisma = new NewPrismaClient();
const oldPrisma = new OldPrismaClient();

const databases = { "OLD": oldPrisma, "NEW": newPrisma };

class AccountDatabase {

    constructor(dbName) {
        this.dbName = dbName;
        
        if (!(dbName in databases)) {
            throw new Error("Unsupported Database");
        }

        this.prismaClient = databases[dbName];
    }

    findAll() {
        return this.prismaClient.accounts.findMany();
    }
}

export default AccountDatabase;