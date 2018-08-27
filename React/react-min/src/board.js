import React from 'react';
import Cell from './cell';

export default class Board extends React.Component {

    renderCell(i) {
        console.log('render Cell:'+i);
        return <Cell value={this.props.squares[i]} onClick={(evt) => this.props.onClick(i)} />;
    }

    render() {
        //console.log('render Board');
        return  <div className="absolute" style={{zIndex:10}} >
                    <div className='board-row'>
                        {this.renderCell(0)}
                        {this.renderCell(1)}
                        {this.renderCell(2)}
                    </div>
                    <div className='board-row'>
                        {this.renderCell(3)}
                        {this.renderCell(4)}
                        {this.renderCell(5)}
                    </div>
                    <div className='board-row'>
                        {this.renderCell(6)}
                        {this.renderCell(7)}
                        {this.renderCell(8)}
                    </div>
                </div>;
    }
}