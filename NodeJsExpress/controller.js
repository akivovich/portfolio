let view = require('./view');
let model = require('./model');
const fs = require('fs');

class Controller {
    constructor() {
        this.contentTemplate = null;
    }

    getContentTemplate() {  
        this.contentTemplate = this.contentTemplate || fs.readFileSync('./Client/index.html', 'utf8');
        return this.contentTemplate;
    }

    addNew(props) {
        console.log('controller.addNew');
        let result = model.add(props).render();
        console.log('controller.addNew:result='+result);
        return result;
    }

    removeRecords(props) {
        console.log('controller.removeRecords');
        let result = model.remove(props).render();
        console.log('controller.removeRecords:result='+result);
        return result;
    }

    getView() {
        return view.render({ 
                    template: this.getContentTemplate(),
                    data: model.get()
                });
    }

    getScript(name) {
        console.log(name);
        return fs.readFileSync('./Client/'+name, 'utf8');
    }
};

module.exports = new Controller();