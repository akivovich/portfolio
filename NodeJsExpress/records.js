class Record {
    constructor(props) {
        this.id = props.id;
        this.title = props.title;
    };

    render() {
        console.log(`Record.render:id=${this.id},title=${this.title}`);
        let getHtml = (id, title) => `<input type='checkbox' id=${id+'_ckb'}>${title}</input>`;
        return `<li id=${this.id}>${getHtml(this.id, this.title)}</li>`;
    }
};

class Records {        
    constructor() {
        this.id = 0;
        this.records = [];
    };

    remove(props) {
        console.log('records.delete');
        console.log(props);
        let ids = props;        
        let records = this.records;
        ids.forEach((id) => {
            let index = records.findIndex(r => r.id === id);
            if (index >= 0) {
                let len = records.length;
                records.splice(index, 1); 
                console.log(`len:${len}=>${records.length}`);
            }                
        });
        return this;
    }

    add(props) {
        console.log('records.add');
        console.log(props);
        let newRecord = new Record({id: "rec-" + this.id++, title: props.title});
        this.records.push(newRecord);
        return this;
    }

    render() {
        let sb = [];
        sb.push("<ul id='records' class='records'>");
        this.records.forEach((record) => sb.push(record.render()));
        sb.push("</ul>")
        return sb.join('');
    };
}

module.exports = new Records();
