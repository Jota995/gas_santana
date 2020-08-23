const conductorModel = require('../models/conductor.model');

class Conductor {
    async getAllConductores(req, res) {
        /*try {
            const conductores = await conductorModel.find();
            res.send(conductores);
        } catch (err) {
            res.send(err);
        }*/
        res.render('conductores');
    }

    async getOneConductor(req, res) {
        try {
            const _id = req.params.id;
            const conductor = await conductorModel.find({_id});
            res.send(conductor);
        } catch (err) {
            res.send(err);
        }
    }
}

module.exports = new Conductor;