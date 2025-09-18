const enseignModel = require('../models/enseignement');


class Enseign {

    async getAll() {
        const resp = await enseignModel.find().populate(["Enseign", "enseignant"])
        return resp
    }
    async add(body) {
        const resp = await enseignModel.insertOne(body).populate(["Enseign", "enseignant"])
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
        const resp = await enseignModel.findById(body.id)
    }
}

module.exports = Enseign