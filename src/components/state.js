import React, { Component } from 'react';

export class State extends Component {
    state = {
        value: 0
    }
    render() {
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={()=>{this.setState({value: this.state.value + 1})}}>Click to add!</button>
            </div>
        );
    }
}