import React, { Component } from 'react'
import '../App.css';


export class ChatMessage extends Component {
    render() {
        return (

            <div 
                className={"p-2 mb-2 rounded-pill bg-secondary " + (this.props.isLeft ? " mr-auto " : " ml-auto ")}> {this.props.msg} 
            </div>

        )
    }
}

export default ChatMessage
