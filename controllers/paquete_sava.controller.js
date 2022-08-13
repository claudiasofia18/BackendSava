const db = require('../models/index');

exports.list = async (req, res, next) => {
    try {
        let paquetes = await db.SavaPackage.findAll({attributes: { exclude: ["id", "usuario", "updatedAt","createdAt"]}});
        console.log(paquetes);
        return res.status(200).json(paquetes);
    }catch (err) {
        next(err);
    }
}
exports.ModEstado=async(req,res,next)=>{
    try{
        const{estado,codigoSava}=req.body;
        await db['SavaPackage'].update({estado:estado},{
        where:{
            sava_code:codigoSava,
        }
    }) 
    return res.status(200).json( {message:"Se ha modificado exitosamente"})
    }catch(err){
        next(err);
    }
}