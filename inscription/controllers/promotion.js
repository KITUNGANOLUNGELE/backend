const promotionModel = require('../models/promotion');


class Student {

    async getAll() {
        const resp = await promotionModel.find()
        return resp
    }
    async add(body) {
        const resp = await promotionModel.insertOne(body)
        return resp
    }

    async update(body) {
        const resp = await promotionModel.updateOne({ _id: body.id }, { $set: body });
        return resp
    }

    async delete(body) {
        const resp = await promotionModel.deleteOne({ _id: body.id });
        return resp;
    }

    async getONe(body) {
        const resp = await promotionModel.findById(body.id)
    }
}

module.exports = Student