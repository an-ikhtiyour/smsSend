const Sms = require("../../models/sms");

let smsStorage = {
    create: async (data) => {
        const task = new Sms(data);

        try {
            const res = await task.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    update: async (id, data) => {
        try {
            let task = await Sms.findOne({ _id: id });

            if (!task) {
                throw new Error("Not found in database");
            }

            task.title = data.title;
            task.status = data.status;
            const res = await task.save();

            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    get: async (id) => {
        try {
            let task = await Sms.findOne({ _id: id });

            if (!task) {
                throw new Error("Not found in database");
            }

            return task;
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