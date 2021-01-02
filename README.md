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

- Each name refers to a single person. I.e name is the sole name, no consideration of last name to know they are separate people.