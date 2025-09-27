const coursModel = require('../models/cours');


class Cours {

    async getAll() {
        const resp = await coursModel.find().populate(["promotion"])
        return resp
    }
    async add(body) {
        const resp = await coursModel.insertOne(body)
        return resp
    }

    async update(body) {
        const resp = await coursModel.updateOne({ _id: body.id }, { $set: body });
        return resp
    }

    async delete(body) {
        const resp = await coursModel.deleteOne({ _id: body.id });
        return resp;
    }

    async getONe(body) {
        const resp = await coursModel.findById(body.id).populate(["promotion"])
    }
}

module.exports = Cours