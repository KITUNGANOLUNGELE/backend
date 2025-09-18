const inscriptionModel = require('../models/inscription');


class Inscription {

    async getAll() {
        const resp = await inscriptionModel.find().populate(["promotion", "etudiant"])
        return resp
    }

    async add(body) {
        const resp = await inscriptionModel.insertOne(body)
        return resp
    }

    async update(body) {
        const resp = await inscriptionModel.updateOne({ _id: body.id }, { $set: body });
        return resp
    }

    async delete(body) {
        const resp = await inscriptionModel.deleteOne({ _id: body.id });
        return resp;
    }

    async getONe(body) {
        const resp = await inscriptionModel.findById(body.id)
    }
}

module.exports = Inscription