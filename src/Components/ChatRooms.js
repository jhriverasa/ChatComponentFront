import React, { Component } from 'react'
import ChatRoom from './ChatRoom';
import axios from 'axios'

class ChatRooms extends Component {
 
    state = {
        chatRooms: []
    }
    
    componentDidMount(){

            axios.get(`http://localhost:3001/1/room`)
            .then(response => {
                const chatRooms = response.data;
                this.setState({chatRooms});
            })
            
    }

    render() {
        return (
            <div>
                    {this.state.chatRooms.map(room => 
                        <ChatRoom
                            key={room.id} 
                            src="https://dummyimage.com/50x50/000/fff"
                            receiverName= {room.user} 
                            date={room.lastMessage.created_at}
                            lastMsg={room.lastMessage.message}
                        />
                    )}

            </div>
        )
    }
}

export default ChatRooms
