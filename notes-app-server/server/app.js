import express from 'express'
import bodyParser from 'body-parser';
import * as db from './utils/db-utils';
import {port, host} from './etc/config.json';

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	next();
});

app.get("/", (req, res) => {
    console.log('Server:getNotes');
    db.getNotes()
        .then(result => result.recordset)
		.then(recordset => {
			res.send(recordset);
		});
});

app.post("/notes", (req, res) => {
    console.log('Server:addNote', req.body);
	db.addNote(req.body)
		.then(result => {
			res.send(result);
		});
});

app.delete('/notes/:id', (req, res) => {
    console.log('Server:removeNote', req.params.id);
    db.removeNote(req.params.id)
		.then(result => {
			res.send(result);
		});
});

const server = app.listen(port, host, () => console.log(`Server started at ${host}:${port}`));
