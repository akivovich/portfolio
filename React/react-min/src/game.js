import React from 'react';
import Board from './board';
import calculateWinner from './helpers/calculateWinner';
import canvas from './canvas';

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [{
                squares: Array(9).fill(null)
            }],
            isAllowed: true,
            winner: null
        };
    }

    onClickHandler(i) {
        console.log('onClickHandler:'+i);
        const {xIsNext, stepNumber, history} = this.state;
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if (!(squares[i] || calculateWinner(squares))) {
            squares[i] = xIsNext? 'X' : 'O';
            this.setState({
                xIsNext: !xIsNext,
                stepNumber: stepNumber + 1,
                history: history.concat([{squares}]),
                isAllowed: true,
                winner: calculateWinner(squares)
            });      
        }
        else {
            this.setState({
                isAllowed: false
            });      
        }  
    }    

    render() {
        const {xIsNext, stepNumber, history, isAllowed, winner} = this.state;
        const current = history[stepNumber];
        const status = winner ? ('Winner is:' + winner.winner) : ('Next player is: ' + (xIsNext ? 'X' : 'O'));
//        const canvas = winner ? <CanvasComponent winner = {winner} /> : '';
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares = {current.squares}
                        onClick = {(i) => this.onClickHandler(i) }
                    />
                    {canvas(winner)}
                </div>
                <div className="absolute game-info">
                    <div>{status}</div>
                    <div className='error'>{isAllowed || winner ? '' : 'Wrong position'}</div>
                    <ul>{/*history*/}</ul>
                </div>
            </div>
        );
    }
}

