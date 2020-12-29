- Use node version 12 (at the time of making this I used v12.20.0)
    - if you have nvm installed, you can run `nvm use` to use it
    - https://heynode.com/tutorial/install-nodejs-locally-nvm

### Definitions
- New Records: unique ids that exist in the new database and not the old database
- Missing Records: unique ids that exist in the old database and not the new database
- Corrupted Records: unique ids that exist in both databases but have different information


### Assumptions

- Each name refers to a single person. I.e name is the sole name, no consideration of last name to know they are 