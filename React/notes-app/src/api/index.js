import axios from 'axios';
import {apiPrefix} from '../config.json';
//import { resolve } from 'dns';
/*
let _id = 0;
let _notes = [];
*/

export default {
    listNotes() {
        return axios.get(`${apiPrefix}`);
        //return new Promise((resolve, reject) => resolve(_notes));
    },
    createNote(newNote) {
        /*
        let instance = axios.create({
            baseURL: `${apiPrefix}/notes`,
            timeout: 1000,
            headers: {
                ['Content-Type']: 'text/json',
                ['Access-Control-Allow-Origin']: '*',
                ['Access-Control-Allow-Methods']: 'GET,PUT,POST,DELETE'
            }
          });
          return instance.post(`${apiPrefix}/notes`, newNote);
          */
        return axios.post(`${apiPrefix}/notes`, newNote);
        /*
        newNote.id = _id++;
        newNote.createdAt = Date.now();
        _notes.push(newNote);
        console.log('api:createNote', newNote);
        return new Promise((resolve, reject) => resolve(_notes));
        */
    },
    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/notes/${noteId}`);
        /*
        let index = _notes.findIndex(n => n.id === noteId);
        if (index >= 0)
            _notes.splice(index, 1);
        return new Promise((resolve, reject) => resolve(_notes));
        */
    }
};