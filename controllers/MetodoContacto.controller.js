const db = require('../models/index');
exports.CreateContacto= async(req,res,next)=>{
    try{
        console.log(req.body)
        const{forma,correo,detalle}=req.body;
        console.log(req.body.correo)
        const result= await db.sequelize.transaction(async(t) => {
            await db['ContactMedia'].findOrCreate({
                where:{
                    user:correo,
                    formaContacto:forma
                },
                defaults:{detalleContacto:detalle}
            })
            .then((user)=>{
                    if(user[1]){
                      return res.status(201).json({
                        message:"Se ha creado su medio de contacto exitosamente"
                      })
                    }else{
                      return res.status(400).json({
                        message:"Solo puede tener una forma de contacto con"+forma
                      })
                    }
            })
        })
    }catch(err){
        next(err);
    }
}