import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import Constants from '../constants/appConstants';
import appConstants from '../constants/appConstants';

const CHANGE_EVENT = 'changeEvent';
const formatNote = function(data) {
    return {
        id: data._id,
        title: data.title,
        text: data.text,
        color: data.color || 'white',
        createdAt: data.createdAt
    };
};

class AppStore extends EventEmitter {
    constructor(props) {
        super(props);
        this._notes = [];
        this._loadingError = null;
        this._isLoading = false;
        AppDispatcher.register(action => this.performanAction(action));
    }
    formatNote(data) {
        return {
            id: data.std_id,
            title: data.std_title,
            text: data.std_text,
            color: data.std_color || 'white',
            createdAt: data.std_created_on
        };
    }
    isLoading() {
        return this._isLoading;
    }
    getNotes() {
        console.log('store:getNotes', this._notes);
        return this._notes;
    }
    emitChange() {
        console.log('store:emitChange');
        this.emit(CHANGE_EVENT);
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    performanAction(action) {
        switch (action.type) {
            case appConstants.LOAD_NOTES_REQUEST:
                console.log('store:LOAD_NOTES_REQUEST');
                this._isLoading = true;
                break;
            case appConstants.LOAD_NOTES_SUCCESS:
                this._isLoading = false;
                this._notes = action.notes.map(this.formatNote);
                this._loadingError = null;
                console.log('store:LOAD_NOTES_SUCCESS', this._notes, action.notes);
                break;
            case appConstants.LOAD_NOTES_ERROR:
                this._loadingError = action.error;
                break;
            default:
                console.log("handler doesn't exist");
                return;
        }
        this.emitChange();
    }
};

export default new AppStore();
