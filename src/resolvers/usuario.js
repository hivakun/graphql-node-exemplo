function pedidos(parent, args, context) {
    return context.prisma.usuario({ id: parent.id }).pedidos();
}

module.exports = {
    pedidos,
};