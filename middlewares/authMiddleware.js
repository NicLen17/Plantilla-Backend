const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // Leer token
    const token = req.header('x-auth-token');
    console.log("🚀 ~ file: authMiddleware.js ~ line 6 ~ token", token)
    // Revisar Token
    if (!token) {
        return res.status(401).json({ msg: 'No hay Token, permiso no valido' })
    }
    // Validar Token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        return next()
    } catch (error) {
        res.status(401).json({ msg: 'Token no valido' })
    }
}

