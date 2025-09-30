const StudentModel = require('../models/etudiant');
const EnseignantModel = require('../models/enseignant')
const adminModel = require('../models/admin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class Auth {
    async login(body) {
        const result = await StudentModel.findOne({ email: body.email })
        if (result?._id) {
            const r = { ...result, role: "etudiant" }
            if (!r?.mdp) {
                const token = jwt.sign(JSON.stringify(r), "1234567890")
                return { ...r, token: token }
            } else if (r?.mdp) {
                if (await bcrypt.compare(body.mdp, r?.mdp)) {
                    const token = jwt.sign(JSON.stringify(r), "1234567890")
                    return { ...r, token: token }
                } else {
                    return null
                }
            }

        } else {
            const result = await EnseignantModel.findOne({ email: body.email });
            if (result?._id) {
                const r = { ...result, role: "enseignant" }
                if (!r?.mdp) {
                    const token = jwt.sign(JSON.stringify(r), "1234567890")
                    return { ...r, token: token }
                } else if (r?.mdp) {
                    if (await bcrypt.compare(body.mdp, r?.mdp)) {
                        const token = jwt.sign(JSON.stringify(r), "1234567890")
                        return { ...r, token: token }
                    } else {
                        return null
                    }
                }
            }
            else {
                const result = await adminModel.findOne({ email: body.email })
                if (result?._id) {
                    const r = { ...result, role: "admin" }
                    if (!r?.mdp) {
                        const token = jwt.sign(JSON.stringify(r), "1234567890")
                        return { ...r, token: token }
                    } else if (r?.mdp) {
                        if (await bcrypt.compare(body.mdp, r?.mdp)) {
                            const token = jwt.sign(JSON.stringify(r), "1234567890")
                            return { ...r, token: token }
                        } else {
                            return null
                        }
                    }
                } else {
                    return null
                }
            }
        }
    }

    async verify(body) {
        try {
            if (!body.token) {
                return null
            }
            const token = body.token
            const user = jwt.verify(token, "1234567890");
            return user
        } catch (error) {
                return {message : error.message}
        }


    }
}

module.exports = Auth