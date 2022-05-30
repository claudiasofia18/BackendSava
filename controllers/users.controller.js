const db = require('../models/index');
const generate_token = require('../Middleware/generate_token.js');
const {CLIENTE,ADMINISTRADOR} = require('../constants/roles.constants');


exports.createClient = async (req,res,next) => {
    try {
        const { correo, password, numeroLista, direccion} = req.body;
        console.log(correo)
        const result = await db.sequelize.transaction(async (t) => {
            
            let newPerson = await db['Persona'].create({
                password:password,
                rol: CLIENTE,
                correo: correo
            },{transaction: t})

            let newClient = await db['Cliente'].create({
                NumeroLista: numeroLista,
                direccion: direccion,
                usuario: newPerson.id
            },{transaction: t})

            console.log(newClient)

            const token = await generate_token.generate_token(newPerson);
            await db['Persona'].update({
                token:token
            },{transaction:t, where: {correo: newPerson.correo}})

            return res.status(201).json({
                status: 201,
                payload: {
                    person: {
                        correo: newPerson.correo,
                        password: newPerson.password
                    },
                    token: token
                }
            })
        })

    }catch(err){
        next(err);
    }
}

exports.createAdmin = async (req,res,next) => {
    try {
        const { correo, password, numeroLista, direccion} = req.body;
        console.log(correo)
        const result = await db.sequelize.transaction(async (t) => {
            
            let newPerson = await db['Persona'].create({
                password:password,
                rol: ADMINISTRADOR,
                correo: correo
            },{transaction: t})

            const token = await generate_token.generate_token(newPerson);
            await db['Persona'].update({
                token:token
            },{transaction:t, where: {correo: newPerson.correo}})

            return res.status(201).json({
                status: 201,
                payload: {
                    person: {
                        correo: newPerson.correo,
                        password: newPerson.password
                    },
                    token: token
                }
            })
        })
    }catch(err){
        next(err);
    }
}
exports.CreateContacto= async(req,res,next)=>{
    try{
        console.log(req.body)
        const{forma,correo,detalle}=req.body;
        console.log(req.body.correo)
        const result= await db.sequelize.transaction(async(t) => {
            await db['MedioContacto'].findOrCreate({
                where:{
                    usuario:correo,
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