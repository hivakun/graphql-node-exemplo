function usuario(parent, args, context) {
    return context.prisma.pedido({ id: parent.id }).usuario();
}

function prato(parent, args, context) {
    return context.prisma.pedido({ id: parent.id }).prato();
}

function bebida(parent, args, context) {
    return context.prisma.pedido({ id: parent.id }).bebida();
}

module.exports = {
    prato,
    bebida,
    usuario,
}