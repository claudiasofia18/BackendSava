const jwt = require('jsonwebtoken');
const token_secret = require('../config/app_back.config.js');
const db = require('../models/index');

const verifyToken = (req,res,next) => {
    const token = req.header("Authorization");
    
    if(!token){
        return res.status(401).json({
            error: "Acceso Denegado"
        });
    }

    try{
        const verificar = jwt.verify(
            token,
            token_secret.TOKEN_SECRET,
            async (err, decoded) =>  {
                console.log(decoded)
                if(err){
                    console.log("err")
                    return res.status(400).json({
                        status: 400,
                        error: "Invalid token"
                    });
                }else{
                    req.decoded = decoded;
                    
                    let user = await db['Persona'].findOne({
                        where: {
                            id: decoded.id
                        }
                    })

                    if(user.token == token){
                        next();
                    }else{
                        return res.status(400).json({
                            status: 400,
                            error: "Invalid Token"
                        })
                    }
                    
                }
            }     
        )
    }catch(err){
        return res.status(400).json({
            error: err
        })

    }
}

module.exports = verifyToken;