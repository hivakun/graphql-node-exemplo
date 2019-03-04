"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Usuario",
    embedded: false
  },
  {
    name: "Produto",
    embedded: false
  },
  {
    name: "Pedido",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/rivaldo-rodrigues-aeb238/graphql-node-exemplo/dev`
});
exports.prisma = new exports.Prisma();
