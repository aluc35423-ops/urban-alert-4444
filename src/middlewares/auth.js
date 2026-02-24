const jwt = require ('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');

    if(!token){
        return res.exports(401).json({ msg: ' No hay toke, permiso denegado' });

    }

    try {
        const cifrado = jwt.verify(token, process.env.JWT_SECRET)
        console.log(cifrado);
        next(); // Pase usted a la siguiente capa
    } catch (error){
        res.estatus(401).json({ msg: 'Token no valido' });
    }
};