import React, { Component } from 'react';
import './App.less';
import NoteEditor from './noteEditor';
import NotesGrid from './notesGrid';
import NotesActions from './actions/notesActions';
import NotesStore from './stores/NotesStore';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onDataReady = this.onDataReady.bind(this);
    this.state = {
      isLoading: false,
      notes: []  
    };
  }

  componentDidMount() {
    NotesStore.addChangeListener(this.onDataReady);
    NotesActions.loadNotes();
  }

  componentWillUnmount() {
    NotesStore.removeChangeListener(this.onDataReady);
  }

  onDataReady() {
    console.log('Add:onDataReady');
    this.setState({
      isLoading: NotesStore.isLoading(),
      notes: NotesStore.getNotes()
    });
  }

  handleNoteAdd(newNote) {
    console.log('App:handleNoteAdd', newNote);
    NotesActions.createNote(newNote);
  };

  handleNoteDelete(id) {
    console.log('App:handleNoteDelete', arguments);
    NotesActions.deleteNote(id);
  };

  render() {
    return (
      <div className="App">
        <h2 className='App__header'>Notes App</h2>
        <NoteEditor 
          onNoteAdd={(newNote) => this.handleNoteAdd(newNote)} 
        />
        <NotesGrid 
          onNoteDelete={(id) => this.handleNoteDelete(id)} 
          notes= {this.state.notes}
        />
      </div>
    );
  }
}


