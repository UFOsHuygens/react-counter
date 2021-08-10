import React, { Component } from 'react'

export class UseState extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.props.action}>Click to add!</button>
            </div>
        );
    }
}