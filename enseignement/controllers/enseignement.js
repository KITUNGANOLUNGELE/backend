const enseignModel = require('../models/enseignement');


class Enseign {

    async getAll() {
        const resp = await enseignModel.find().populate(["cours", "enseignant"])
        return resp
    }
    async add(body) {
        const resp = await enseignModel.insertOne(body)
        return resp
    }

    async update(body) {
        const resp = await enseignModel.updateOne({ _id: body.id }, { $set: body });
        return resp
    }

    async delete(body) {
        const resp = await enseignModel.deleteOne({ _id: body.id });
        return resp;
    }

    async getONe(body) {
        const resp = await enseignModel.findById(body.id).populate(["cours", "enseignant"]);
        return resp;
    }
}

module.exports = Enseign