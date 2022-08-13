const db = require('../models/index');
const generate_token = require('../Middleware/generate_token');
const {CLIENTE,ADMINISTRADOR} = require('../constants/roles.constants');


exports.createClient = async (req,res,next) => {
    try {
        const { correo, password, numeroLista, direccion} = req.body;
        const result = await db.sequelize.transaction(async (t) => {
            let findPerson = await db['User'].findOne({
                where:{
                    username:correo
                }
            });
            console.log(findPerson)
            if (findPerson != null) {
                return res.json({message: 'Usuario ya registrado'}).status(204);
            }
            let newPerson = await db['User'].create({
                password:password,
                role: CLIENTE,
                username: correo
            },{transaction: t})
            let newClient = await db['Client'].create({
                username: newPerson.id,
            },{transaction: t})
            console.log(newClient)
            const token = await generate_token.generate_token(newPerson);
            console.log(token)
            await db['User'].update({
                token:token
            },{transaction:t, where: {username: newPerson.username}})

            return res.json({message: 'Creacion completa'}).status(201);
        })
    }catch(err){
        next(err)
    }
}

exports.createAdmin = async (req,res,next) => {
    try {
        const { correo, password, numeroLista, direccion} = req.body;
        console.log(correo)
        const result = await db.sequelize.transaction(async (t) => {
            
            let newPerson = await db['User'].create({
                password:password,
                role: ADMINISTRADOR,
                username: correo
            },{transaction: t})

            const token = await generate_token.generate_token(newPerson);
            await db['User'].update({
                token:token
            },{transaction:t, where: {correo: newPerson.correo}})

            return res.status(201).json({
                status: 201,
                payload: {
                    person: {
                        correo: newPerson.username,
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
            await db['ContactMedia'].findOrCreate({
                where:{
                    username:correo,
                    wayTocontact:forma
                },
                defaults:{details:detalle}
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
exports.postUser= async(req,res,next)=>{
    try {
        const { correo, password} = req.body;
        let user = await db['User'].findOne({
            where:{
                username:correo,
                password:password
            }
        });


        const token = await generate_token.generate_login_token(user);
        await db['User'].update({
            token:token
        },{ where: {username: user.username}})

        return res.json({token}).status(202);
    }catch(err){
        const { correo, password} = req.body;
        let user = await db['User'].findOne({
            where:{
                username:correo
            }
        });

        if (user == null) {
            return res.json({message: 'Usuario no existe'}).status(204);
        }

        return res.json({token: 'error', message: 'Credenciales no coinciden'}).status(204);
    }
}