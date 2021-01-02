## Initial Setup

- Install Docker
```
https://docs.docker.com/get-docker/
```

- Commands to pull datasets and credentials to access both
```
You should already have these
```

- Install Node
```
https://nodejs.org/en/download/
```

- Use node version 12 (at the time of making this I used v12.20.0)
    - if you have nvm installed, you can run `nvm use` to use it
    - https://heynode.com/tutorial/install-nodejs-locally-nvm

*Note: you can also use Homebrew to install these packages as well if you're more comfortable using it.*

---

## Using the service

*Note: I've documented this using Yarn, but you can use NPM too.*
- Outputting the report
```
yarn install && yarn start
```

- Running unit tests
```
yarn test
```

- Not needed to run, but this command was used to generate the Prisma schemas to access the data from the database
```
yarn generate
```

---

## Definitions
- New Records: unique ids that exist in the new database and not the old database
- Missing Records: unique ids that exist in the old database and not the new database
- Corrupted Records: unique ids that exist in both databases but have different information

---

## Assumptions

- Each name refers to a single person. I.e name is the sole name, no consideration of last name to know they are separate people. Thus, we must use the ID to know whether an entity exists in the new Account Database.

- The new column, favorite_flavor, in the new table isn't necessary for us to determine whether a record is corrupt. We should only rely on the columns that are present in both tables.

- Our comparison for corrupt data should verify that
    1. The original entity exists in the new database
    2. The name and email are the same as the original record
        - a. If not, we will create objects to denote the corrupted data as it exists in the new Account Database, and what we should insert in order to make the record correct.

- Since email is unique, we must first remove the corrupted rows and insert with the correct data. We can't simply update the fields since we can't make updates to rows asynchronously.

- If a record is corrupt, we could assume that we don't know who the entered favorite_flavor belongs to since name and/or email can be corrupted. So upon inserting the records of the missing and records that replace the corrected records, we can allow the default favorite_flavor (chocolate) be the flavor.
