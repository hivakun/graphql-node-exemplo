const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUsuarioID } = require('../util/auth-util');

async function cadastro(parent, args, context, info) {

    const senha = await bcrypt.hash(args.senha, 10);
    const usuario = await context.prisma.createUsuario({...args, senha});

    const token = jwt.sign({usuario: usuario.id}, APP_SECRET);

    return {
        token,
        usuario,
    }
}

async function login(parent, args, context, info) {

    const usuario = await context.prisma.usuario({email: args.email});

    if (!usuario) {
        throw new Error('Usuário não encontrado')
    }

    const valido = await bcrypt.compare(args.senha, usuario.senha);

    if (!valido) {
        throw new Error('Senha inválida');
    }

    const token = jwt.sign({userId: usuario.id}, APP_SECRET);

    return {
        token,
        usuario,
    }
}

function addBebida(parent, args, context, info) {

    const usuario = getUsuarioID(context);

    return context.prisma.createProduto({
        nome: args.nome,
        categoria: 'Bebida'
    });
}

function addPrato(parent, args, context, info) {

    const usuario = getUsuarioID(context);

    return context.prisma.createProduto({
        nome: args.nome,
        descricao: args.descricao,
        imagemUrl: args.imagemUrl,
        categoria: 'Prato'
    });
}

async function pedir(parent, args, context, info) {

    const idUsuario = getUsuarioID(context);

    return context.prisma.createPedido({
        usuario: { connect: { id: idUsuario } },
        prato: { connect: { id: args.idPrato } },
        bebida: { connect: { id: args.idBebida } },
    });
}

module.exports = {
    cadastro,
    login,
    addPrato,
    addBebida,
    pedir
};