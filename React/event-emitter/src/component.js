import React from 'react';

export default class Component extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {};
        this.state[props.myEventId] = '';
        this.state[props.hisEventId] = '';
    }

    onValueReceived(value) {
        let newState = {};
        newState[this.props.hisEventId] = value;
        this.setState(newState);
    }

    onMyValueChanged(e) {
        let newState = {};
        newState[this.props.myEventId] = e.target.value;
        this.setState(newState);
        this.props.eventEmitter.emit(this.props.hisEventId, e.target.value);
    }

    componentWillUnmount() {
        this.props.eventEmitter.removeAllListeners(this.props.myEventId);
    }

    componentWillMount() {
        this.props.eventEmitter.addListener(this.props.myEventId, (value) => this.onValueReceived(value));
    }

    render() {
        return  <div>
                    <h1>Блок {this.props.ident}</h1>
                    <label>Передать в дургой блок</label>
                    <input defaultValue={this.state[this.props.myEventId]} onChange={e => this.onMyValueChanged(e)} />
                    <p style={{ color: "green"}}>В пределах своего блока:</p>
                    <p>{this.state[this.props.myEventId]}</p>
                    <p style={{ color: "blue"}}>Данные с другого блока:</p>
                    <p>{this.state[this.props.hisEventId]}</p>
                </div>;

    }
};