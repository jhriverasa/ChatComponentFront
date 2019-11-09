import React, { Component } from 'react';
import ChatMessage from './ChatMessage';
import axios from 'axios';

class ChatRoomMessages extends Component {


    state ={
        messages:[]
    }

    componentDidMount(){
        axios.get("http://localhost:3001/"+ this.props.roomId)
            .then(response => {
                const messages = response.data[0].messages;
                //console.log(messages)
                this.setState({messages});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
              })
    }
    

    componentDidUpdate(prevProps) {
        //Typical usage, don't forget to compare the props
        if (this.props.roomId !== prevProps.roomId) {
            axios.get("http://localhost:3001/"+ this.props.roomId)
            .then(response => {
                const messages = response.data[0].messages;
                //console.log(messages)
                this.setState({messages});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
              })
        }
    }

    render() {
        return (
            <div className="d-flex flex-column w-100">

                { !!this.state.messages && this.state.messages.map(msg => 
                    <ChatMessage                            
                        key={msg._id}
                        id = {msg._id} 
                        senderId= {msg.userID} 
                        msg={msg.message}
                        isLeft={msg.userID === this.props.myId ? false : true}
                        
                    />
                )}
            </div>
        )
    }
}

export default ChatRoomMessages
