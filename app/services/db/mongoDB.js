'use strict';
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

/*
   --  DB CONNECTION STATUS --
        0: disconnected
        1: connected
        2: connecting
        3: disconnecting
*/

class mongoDB {
    constructor() {
        /*
            VARIABLES
        */
        this.URI = 'z';
        this.modelsPath = path.join(__dirname, '..', 'models');

        // OPTIONS
        this.options = {
            useNewUrlParser: true,
            promiseLibrary: bluebird
        };

        // FETCH MODELS
        this.models = this.fetchModels();

        //LOAD EVENTS
        this.loadEvents();
    }

    // CONNECT TO DB
    connect() {
        mongoose.Promise = bluebird;
        return mongoose.connect(this.URI, this.options)
            .then(() => console.log('DB connected'));
    }

    loadEvents() {
        // When successfully connected
        // mongoose.connection.on('connected', function () {
        //     console.log(`Database is connected to: [ ${this.name} ]`);
        // });

        // If the connection throws an error
        mongoose.connection.on('error', function (err) {
            console.log('Database connection error: ' + err);
        });

    }

    /*
        GETTERS
    */
    fetchModels() {
        return fs.readdirSync(this.modelsPath).map(file => {
            return file.replace('Model.js', '');
        })
    }

    getModel(name) {
        console.log(this.models)

        if (this.models.indexOf(name) !== -1) {
            const filePath = path.join(this.modelsPath, name + 'Model.js');
            return require(filePath)
        } else {
            console.warn('DB ERROR: Model not defined.')
        }
    }

    /*
        CHECKS
    */
    getStatus() {
        return mongoose.connection.readyState;
    }

    isConnected() {
        return mongoose.connection.readyState === 1;
    }
}

module.exports = new mongoDB();
