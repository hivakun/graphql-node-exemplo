const jwt = require('jsonwebtoken');
const APP_SECRET = 'secret';

function getUsuarioID(context) {

    const Authorization = context.request.get('Authorization');

    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }

    throw new Error('Não autenticado');
}

module.exports = {
    APP_SECRET,
    getUsuarioID,
};