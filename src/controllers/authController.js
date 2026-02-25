const generarJWT = require('../helpers/createJWT');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email === "email@correo.com" && password === "Pass123") {
            
            const token = generarJWT(email);

            return res.json({
                msg: "¡Bienvenido! Token generado con éxito.",
                token: token
            });
        } else {
            return res.status(401).json({ msg: "Correo o contraseña incorrectos" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error interno al intentar loguear" });
    }
};