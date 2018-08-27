let records = require('./records');

class Model {
    constructor() {
    }

    add(props) {
        console.log('model.add');
        console.log(props);
        return records.add(props);
    }

    remove(props) {
        console.log('model.remove');
        console.log(props);
        return records.remove(props);        
    }

    get() {
        return records;
    }

};

module.exports = new Model();
