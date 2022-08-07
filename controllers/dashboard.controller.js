const db = require('../models/index');
const { Op } = require('sequelize')
const moment = require('moment');
const { Sequelize } = require('../models/index');

exports.delivered_packages = async (req,res,next) => {
    try{
        let now = moment()
        let packagesMonthBefore = await db['PaqueteSava'].count({
            where:{
                estado: "Entregado",
                updatedAt:{
                    [Op.lte]: now.clone().subtract(30,'d').toDate(),
                    [Op.gte]: moment({month:now.month()-1,day:1,year:now.year()}).toDate()
                }
            }
        })

        let packagesActualMonth = await db['PaqueteSava'].count({
            where:{
                estado: "Entregado",
                updatedAt:{
                    [Op.lte]: now.toDate(),
                    [Op.gte]: moment({month:now.month(),day:1,year:now.year()}).toDate()
                }
            }
        })

        let difference = packagesMonthBefore>0 ? 
            (packagesActualMonth-packagesMonthBefore)/packagesMonthBefore*100
            : -100;

        return res.json({
            payload:{
                current_month: packagesActualMonth,
                difference: parseFloat(difference.toFixed(2))
            }
        }).status(200)
    }catch(err){
        next(err);
    }
}

exports.total_packages = async (req,res,next) => {
    try{
        var now = moment()
        var months = {}
        
        for (const x of Array(5).keys()){
            let packages = await db.PaqueteSava.count({
                where:{
                    estado: "Entregado",
                    [Op.and]: [
                        Sequelize.where(Sequelize.fn('MONTH',Sequelize.col('createdAt')),now.month()+1-x)
                    ]
                }
            })
            months[moment({month:now.month()-x}).format('MMM')]=packages
        }

        return res.json(months).status(200)

    }catch(err){
        next(err);
    }
}

exports.total_clients = async (req,res,next) => {
    try{
        let now = moment()
        let newClientsMonthBefore = await db['Cliente'].count({
            where:{
                createdAt:{
                    [Op.lte]: now.clone().subtract(30,'d').toDate(),
                    [Op.gte]: moment({month:now.month()-1,day:1,year:now.year()}).toDate()
                }
            }
        })

        let newClientsActualMonth = await db['Cliente'].count({
            where:{
                createdAt:{
                    [Op.lte]: now.toDate(),
                    [Op.gte]: moment({month:now.month(),day:1,year:now.year()}).toDate()
                }
            }
        })

        let difference = newClientsMonthBefore>0 ? 
            (newClientsActualMonth-newClientsMonthBefore)/newClientsMonthBefore*100
            : 100;

        return res.json({
            payload:{
                current_month: newClientsActualMonth,
                difference: parseFloat(difference.toFixed(2))
            }
        }).status(200)

    }catch(err){
        next(err);
    }
}
