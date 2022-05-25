const {CLIENTE,ADMINISTRADOR} = require('../constants/roles.constants');

module.exports.isAdministrador = (req, res, next) => {
    if(ADMINISTRADOR != req.decoded.role){
        return res.status(401).json({
            status: 401,
            error: "Unauthorized"
        })
    }
    return next();
}

module.exports.isCliente = (req, res, next) => {
    
    if(CLIENTE != req.decoded.role){
        return res.status(401).json({
            status: 401,
            error: "Unauthorized"
        })
    }
    
    return next();
}