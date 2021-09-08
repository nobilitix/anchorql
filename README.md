# anchorql

`anchorql` is a graphql server for Anchor apps on Solana.

*Note: This repository is in early development stages and isn't yet functional*
![Screen Shot 2021-09-09 at 1 32 03](https://user-images.githubusercontent.com/1970424/132594439-cb248648-5c5e-40eb-bcce-de76733ca867.png)
Current state of the repo in all its' hello-world glory!

## Core functionality list
- [x] - graphql server with a graphiql GUI
- [ ] - convert anchor IDL into a graphql schema by specifying a program PublicKey

Next steps:
- [ ] - add the ability to cache data - ideally to make this extensible it should be an interchangeable adapter so that teams could build their own backends
- [ ] - specify indexing in a separate schema?
- [ ] - ability to work with data that spans multiple programs (e.g metaplex, serum e.t.c)
- [ ] - configurable logging
- [ ] - ...?
- [ ] - profit

## Developing
1. `git clone git@github.com:nobilitix/anchorql.git`
2. `yarn`
3. `yarn dev` will run the graphql server in watch mode and recompile the TypeScript files in `src/` folder dynamically
4. access the graphql server at [http://localhost:3000/graphql](http://localhost:3000/graphql)

## Logging
`anchorql` uses `winston` for logging and outputs the following two files by default:
- anchorql-combined.log
- anchorql-error.log

Additionally, if the environment is not production, it outputs all logs to console.
