const db = require('../models/index');

exports.list = async (req, res, next) => {
    try {
        let paquetes = await db.PaqueteSava.findAll({ attributes: { exclude: ["id", "usuario", "updatedAt", "createdAt"] } });
        console.log(paquetes);
        return res.status(200).json(paquetes);
    } catch (err) {
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