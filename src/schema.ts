import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
    },
  }),
});

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

// This is just an example of a function that makes us wait a little bit before we have the schema
export async function getSchema() {
  // wait one second
  await sleep(1000);
  return schema;
}
