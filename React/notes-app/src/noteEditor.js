import React from 'react';
import './noteEditor.less';
import ColorPicker from './ColorPicker';

export default class NoteEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getEmptyState();
  };

  getEmptyState() {
    return {
      title: '',
      text: '',
      color: 'white'
    };
  };

  handleTextChange(event) {
    this.setState({text: event.target.value});
  };
  
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  };

  handleColorChange(color) {
    this.setState({color:color});
  }

  handleNoteAdd() {
    const newNote = {
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    };
    console.log("handleNoteAdd", newNote)
    this.props.onNoteAdd(newNote);
    this.setState(this.getEmptyState());
  };

  render() {
    return (
      <div className='NoteEditor'>
        <input
          type='text'
          className='NoteEditor__title'
          placeholder='Enter title'
          value={this.state.title}
          onChange={(event) => this.handleTitleChange(event)}
        />
        <textarea
          className='NoteEditor__text'
          rows='5'
          placeholder='Enter text'
          value={this.state.text}
          onChange={(event) => this.handleTextChange(event)}
        />
        <div className='NoteEditor__footer'>
          <ColorPicker
            value={this.state.color}
            onChange={(color) => this.handleColorChange(color) }
          />
          <button
            className='NoteEditor__button'
            disabled={!this.state.text}
            onClick={() => this.handleNoteAdd()}
          >
          Add
          </button>
        </div>
      </div>
    );
  };
};

