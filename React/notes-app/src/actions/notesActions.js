import AppDispatcher from '../dispatcher/appDispatcher'
import Constants from '../constants/appConstants'
import  api from '../api';

export default {
    loadNotes() {
        console.log('actions:loadNotes');
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });
        api.listNotes()
            .then((result) => {
                    console.log('actions:notes', result);
                    AppDispatcher.dispatch({
                        type: Constants.LOAD_NOTES_SUCCESS,
                        notes: result.data
                    })
                }
            )
            .catch( err => 
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_ERROR,
                    error: err
                })
            )
    },
    createNote(newNote) {
        console.log('actions:createNote', newNote);
        api.createNote(newNote)
            .then((result) => {
                console.log('actions:createNote', result);
                this.loadNotes()
            })
            .catch(err => console.error(err))
    },
    deleteNote(noteId) {
        api.deleteNote(noteId)
            .then((result) => {
                console.log('actions:deleteNote', result);
                this.loadNotes()
            })
            .catch(err => console.error(err))
    }
};
