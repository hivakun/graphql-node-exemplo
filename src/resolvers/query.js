const { APP_SECRET, getUsuarioID } = require('../util/auth-util');

async function produtos(parent, args, context, info) {

    const where = args.filter ? {
        OR: [
            { categoria_contains: args.filter },
        ],
    } : {};

    const produtos = await context.prisma.produtoes({
        where
    });

    return produtos;
}

async function pedidos(parent, args, context, info) {

    const idUsuario = getUsuarioID(context);
    const usuario = await context.prisma.usuario({id: idUsuario});

    const pedidos = await context.prisma.pedidoes({
        where: { AND: [{ usuario: usuario }] },
        orderBy: 'createdAt_ASC'
    });

    return pedidos;
}

function info(parent, args, context, info) {
    return "Exemplo de aplicação com GraphQL";
}

module.exports = {
    produtos,
    info,
    pedidos
};