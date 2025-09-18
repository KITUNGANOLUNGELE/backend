const studentModel = require('../models/student');


class Student {

    async getAll() {
        const resp = await studentModel.find()
        return resp
    }

    async add(body) {
        const resp = await studentModel.insertOne(body)
        return resp
    }

    async update(body) {
        const resp = await studentModel.updateOne({ _id: body.id }, { $set: body });
        return resp
    }

    async delete(body) {
        const resp = await studentModel.deleteOne({ _id: body.id });
        return resp;
    }

    async getONe(body) {
        const resp = await studentModel.findById(body.id)
    }
}

module.exports = Student