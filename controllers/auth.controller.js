const db = require('../models/index');
const generate_token = require('../Middleware/generate_token');

exports.findOneLogin = async (req,res,next) => {
    try{
        const {correo,password} = req.body;
        let userLogin; 
        if(correo){
            userLogin = await db['User'].findOne({
                where: {
                    username: correo
                }
            });

        }
        if(!userLogin){
            return res.status(404).json({
                status: 404,
                error: "User not found",
            })
        }
        
        const password_valid = password==userLogin.password;
        if (!password_valid) {
            return res.status(401).json({
            status: 401,
            error: "Password invalid",
            });
        }

        const token = await generate_token.generate_token(userLogin);
        await db['User'].update({
            Token: token
        },{
            where: {
                id: userLogin.id
            }
        })
       
        return res.status(200).json({
            status: 200,
            payload: {
                token: token,
                id: userLogin.id,
                role: userLogin.role
            }
        })
    }catch(err){
        next(err);
    }   
}