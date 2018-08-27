import React from 'react';
import ReactDOM from 'react-dom';
import {EventEmitter} from 'events';
import Component from './component';

const eventEmitter = new EventEmitter();

const Constants = {
    EventBlock1: 'Block1.changed',
    EventBlock2: 'Block2.changed'
};

ReactDOM.render(
    <div>
        <Component 
            ident="1" 
            eventEmitter={eventEmitter}
            myEventId = {Constants.EventBlock1}
            hisEventId = {Constants.EventBlock2}            
        />
      <hr></hr>
      <Component 
            ident="2" 
            eventEmitter={eventEmitter}
            myEventId = {Constants.EventBlock2}
            hisEventId = {Constants.EventBlock1}            
        />
    </div>  ,
    document.getElementById("root")
);
