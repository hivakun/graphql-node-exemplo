const { prisma } = require('../prisma/generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');
const Pedido = require('./resolvers/pedido');
const Usuario = require('./resolvers/usuario');

const resolvers = {
    Query,
    Mutation,
    Pedido,
    Usuario
};

var porta = process.env.PORT || 4002;

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

server.start({port: porta}, () => console.log(`Server is running on http://localhost:${porta}`));