class View {
    constructor() {        
        //console.log('View constructor:'+this.content);
    }

    render(model) {
        //console.log(content);
        let content = model.data.render();
        return model.template.replace("{0}", content);
    }
};

module.exports = new View();