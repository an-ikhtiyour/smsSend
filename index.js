const logger = require("./config/logger");
const cfg = require("./config/config");
const mongoose = require("mongoose");
const express = require("express");
const smsRouter = require("./routes/sms");

function main() {
    logger.info("Main function is runing...");
    const mongoDBUrl =
        "mongodb://" +
        // cfg.mongoUser +
        // ":" +\
        
        // cfg.mongoPassword +
        // "@" +
        cfg.mongoHost +
        ":" +
        cfg.mongoPort +
        "/" +
        cfg.mongoDatabase;

    logger.info("Connecting to db: " + mongoDBUrl);
    mongoose
        .connect(mongoDBUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            logger.info("Successfully connected to mongodb");
        })
        .catch((error) => {
            logger.error("Could not connect to mongodb", {
                error: error
            });

            process.exit(1);
        });

    let app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // // Routers
    app.use("/sms", smsRouter);

    app.listen(cfg.HTTPPort, () => {
        logger.info(`Express server is running on PORT: ${cfg.HTTPPort}`);
    });
}

main();