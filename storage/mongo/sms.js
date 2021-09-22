const Sms = require("../../models/sms");

let smsStorage = {
    create: async (data) => {
        const sms = new Sms(data);

        try {
            const res = await sms.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    update: async (id, data) => {
        try {
            let sms = await Sms.findOne({ _id: id });

            if (!sms) {
                throw new Error("Not found in database");
            }

            sms.name = data.name;
            sms.subject = data.subject;
            sms.email = data.email;
            const res = await sms.save();

            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    get: async (id) => {
        try {
            let sms = await Sms.findOne({ _id: id });

            if (!sms) {
                throw new Error("Not found in database");
            }

            return sms;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    delete: async (id) => {
        try {
            await Sms.findOneAndDelete({ _id: id });
            return "Deleted";
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAll: async () => {
        try {
            const res = await Sms.find();
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = smsStorage;