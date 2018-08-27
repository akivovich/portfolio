import React, { Component } from 'react';
import './notesGrid.less';
import Masonry from 'react-masonry-component';
import { options } from 'sw-toolbox';
import Note from './note';

const masonryOptions = {
  itemSelector: '.Note',
  //columnWidth: 250//,
  gutter: 10,
  isFitWidth: true    
};

export default class NotesGrid extends Component {
  render() {
    console.log('notes', this.props.notes);
    return (
      <Masonry
        className='NotesGrid'
        options={masonryOptions}
      >
      {
        this.props.notes.map(note =>
          <Note
            key={note.id}
            title={note.title}
            color={note.color}
            onDelete={this.props.onNoteDelete.bind(null, note.id)}
          >
          {note.text}
          </Note>
        )
      }
      </Masonry>
    );
  };
};

