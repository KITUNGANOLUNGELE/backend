const EnsModel = require('../models/enseignant');


class Eneignant {

    async getAll() {
        const resp = await EnsModel.find()
        return resp
    }

    async add(body) {
        const resp = await EnsModel.insertOne(body)
        return resp
    }

    async update(body) {
        const resp = await EnsModel.updateOne({ _id: body.id }, { $set: body });
        return resp
    }

    async delete(body) {
        const resp = await EnsModel.deleteOne({ _id: body.id });
        return resp;
    }

    async getONe(body) {
        const resp = await EnsModel.findById(body.id)
    }
}

module.exports = Eneignant