const { prisma } = require('../prisma/generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');

const resolvers = {
    Query,
    Mutation
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));