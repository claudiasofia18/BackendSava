const db = require('../models/index');
const jwt = require("jsonwebtoken");
const generator = require('../helpers/create_sava')
exports.list = async (req, res, next) => {
    try {
        let paquetes = await db.PaqueteSava.findAll({ attributes: { exclude: ["id", "usuario", "updatedAt", "createdAt"] } });
        console.log(paquetes);
        return res.status(200).json(paquetes);
    } catch (err) {
        next(err);
    }
}

exports.showByUser = async (req, res, next) => {
    try {
        usuario=jwt.decode(req.header("Authorization"))
        var id=usuario["id"]
        db.WarehousePackage.findAll({
            where: {
                ClientId:id,
                sava_code:null
            },
        })
        .then(paquetes=>{
            return res.status(200).json(paquetes);
        })
    }catch (err) {
        console.log(err)
        next(err);
    }
}
exports.creationSava=async (req, res, next) => {
    try{
        trackingNumber=req.body.packages
        db.WarehousePackage.findAll({
            include: db.Client,
            where: {
                tracking_number:trackingNumber
            }
        }).then(packages=>{
            client=packages[0].Client
            package_sent=client.sentPackages
            client.sentPackages=client.sentPackages+1
            client.save()
            savaCode=generator.generateSavaCode(package_sent,packages[0].ClientId)
            savaCreated=db.SavaPackage.create({
                username: packages[0].ClientId,
                sava_code: savaCode,
                status: 'En bodega',
            }).then(sava=>{
                for(var package of packages){
                    package.sava_code=savaCode
                    package.save()
                }
                console.log(sava)
                return res.status(200).json(sava);
            })
        })
    }catch (err) {
        next(err);
    }
}
exports.createPackage = async (req, res, next) => {
    try {
        const {
            tracking_number,
            client_name,
            status,
            pounds,
            price,
            departure_date,
            arrival_date_destiny,
            arrival_date_warehouse,
            sava_code,
            images
        } = req.body;
        await db['WarehouseTable'].create({
            tracking_number: tracking_number,
            client_name: client_name,
            status: status,
            pounds: pounds,
            price: price,
            departure_date: departure_date,
            arrival_date_destiny: arrival_date_destiny,
            arrival_date_warehouse: arrival_date_warehouse,
            sava_code: sava_code,
            images: images
        }, {
        })
        return res.status(200).json({ message: "Se ha creado exitosamente" })
    } catch (err) {
        next(err);
    }
}

exports.updatePackage = async (req, res, next) => { }

exports.deletePackage = async (req, res, next) => { }
