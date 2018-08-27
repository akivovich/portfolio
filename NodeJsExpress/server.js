let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let controller = require('./controller');
let render = () => controller.getView();
let renderScript = (name) => controller.getScript(name);
let addNew = (props) => controller.addNew(props);
let removeRecords = (props) => controller.removeRecords(props);

app.get('/', (req, res) => {
    res.send(render());
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    if (id.indexOf('.js') >= 0)
       return res.send(renderScript(id));
    res.send(render());
});

app.post('/new', bodyParser.json(), (req, res) => {
    console.log('==== post new ====')
    console.log(req.body);
    let result = addNew({title:req.body.name});
    console.log('post new : result='+result);
    //res.send(result);
    //res.sendStatus(200);
   res.send({result:result});
});

app.post('/delete', bodyParser.json(), (req, res) => {
    console.log('==== post delete ====')
    console.log(req.body);
    let result = removeRecords(req.body);
    console.log('post new : result='+result);
    //res.send(result);
    //res.sendStatus(200);
   res.send({result:result});
});

//app.get('/:id', (req, res) => res.send(req.params));
app.listen(8080, () => console.log('Server started'));