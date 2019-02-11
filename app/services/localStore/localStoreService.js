const Datastore = require('nedb');
const _ = require('underscore');
const Promise = require('bluebird');
const path = require('path');


const DATABASES = ['result_dates', 'winnings_dates', 'test'];

/*
    DataStore Service use NeDB Module
    [ https://github.com/louischatriot/nedb ]
*/


class DataStoreService {
    constructor() {
        this.db = {};
        this._loadDB();
    }

    save(collection, data) {
        return new Promise((resolve, reject) => {
            if (!!collection && DATABASES.indexOf(collection) !== -1) {
                if (!_.isEmpty(data)) {
                    this.db[collection].find({}, (err, query) => {
                        let number = query.length + 1;
                        data = {...data, createdAt: new Date(), entry: number};
                        this.db[collection].insert(data, (err, data) => {
                            if (err)
                                reject(err);
                            else
                                resolve(data);
                        })
                    });
                } else
                    reject('You try to insert entry with no data!');
            } else
                reject('Collection not found!');
        })
    }

    find(collection, data, options = {}) {

        let sort = options.sort ? options.sort : {};
        let skip = options.skip ? options.skip : null;
        let limit = options.limit ? options.limit : null;

        return new Promise((resolve, reject) => {
            if (!!collection && DATABASES.indexOf(collection) !== -1)
                this.db[collection].find(data).sort(sort).skip(skip).limit(limit).exec((err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);

                });
            else
                reject('Collection not found!');
        })

    }

    findLastEntry(collection) {
        return new Promise((resolve, reject) => {
            if (!!collection && DATABASES.indexOf(collection) !== -1)
                this.db[collection].count({}, (err, count) => {
                    this.db[collection].findOne({entry: count}, (err, data) => {
                        if (err)
                            reject(err);
                        else
                            resolve(data);
                    });
                });
            else
                reject('Collection not found!');
        })
    }


    /*
        HELPERS
    */
    _loadDB() {
        DATABASES.forEach(collection => {
            let dir = this._getFilePath(collection);
            this.db[collection] = new Datastore(dir);
            this.db[collection].loadDatabase();
        })
    }

    _getFilePath(file) {
        let fileName = file + '.db';
        return path.join(__dirname, '../../..', 'local_db', fileName);
    }
}

module.exports = new DataStoreService();
