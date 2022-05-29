const db = require('../models/index');

exports.list = async (req, res, next) => {
    try {
        let paquetes = await db.PaqueteSava.findAll({attributes: { exclude: ["id", "usuario", "updatedAt","createdAt"]}});
        return res.status(200).json(paquetes);
    }catch (err) {
        next(err);
    }
}