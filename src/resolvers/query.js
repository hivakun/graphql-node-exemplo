function pratos(parent, args, context, info) {
    return context.prisma.pratos();
}

module.exports = {
    pratos,
};