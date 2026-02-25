const jwt = require('jsonwebtoken');

const generarJWT = (email) => {
    const payload = { email };
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports = generarJWT;