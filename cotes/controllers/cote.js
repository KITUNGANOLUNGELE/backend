const coteModel = require('../models/cote');


class Cote {

    async getAll() {
        const resp = await coteModel.find().populate([{ path: "inscription", populate: ["etudiant"] }, { path: "Cote" }])
        return resp
    }
    async add(body) {
        const resp = await coteModel.insertOne(body)
        return resp
    }

    async update(body) {
        const resp = await coteModel.updateOne({ _id: body.id }, { $set: body });
        return resp
    }

    async delete(body) {
        const resp = await coteModel.deleteOne({ _id: body.id });
        return resp;
    }

    async getONe(body) {
        const resp = await coteModel.findById(body.id).populate([{ path: "inscription", populate: ["etudiant"] }, { path: "Cote" }])
    }
}

module.exports = Cote