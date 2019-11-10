import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Container from 'react-bootstrap/Container';
import ChatRoomMessages from './Components/ChatRoomMessages';
import ChatRooms from './Components/ChatRooms';
import io from 'socket.io-client';
import axios from 'axios';

import './App.css';


/*
    var socket = io('http://localhost:3001');
    socket.emit("subscribe", "5dad53f3dbfd524e794f92ca");
    socket.on('conversation private post', function(data) {
        console.log(data.message);
    });
    socket.emit("send message", {
        room: "5dad53f3dbfd524e794f92ca",
        userID: 1,
        message: "mierda!!!"	
    });
*/


class App extends Component {

    constructor(props) {
        super(props)
    
        //this.handleChatRoomMessagesChange= this.handleChatRoomMessagesChange.bind(this);
        this.handleChatRoomChange = this.handleChatRoomChange.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    }
    
    //My id =  (userId)
    state = {
        roomId: "",
        myId: 1,
        textBoxValue: "",
        messages: []

    }

    handleChatRoomChange(id){
        console.log("you clicked room :"+ id)
        this.setState({roomId: id})

        axios.get("http://localhost:3001/"+ id)
            .then(response => {
                const messages = response.data[0].messages;
                console.log(this.state.messages)
                this.setState({messages: messages});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    
    handleTextBoxChange(event){
        this.setState({textBoxValue: event.target.value})
    }

    handleSendMessage(){
        if(this.state.textBoxValue === "" || this.state.roomId===""){
            console.log("please enter a message.");
        }else{

            var socket = io('http://localhost:3001');
            socket.emit("subscribe", this.state.roomId);
            socket.on('conversation private post', function(data) {
                console.log("Message sent: " + data.message);
            });

            //Send message
            socket.emit("send message", {
                room: this.state.roomId,
                userID: this.state.myId,
                message: this.state.textBoxValue	
            });
            var msg = {
                    _id: this.state.roomId,
                    userID: this.state.myId,
                    message: this.state.textBoxValue,
                    created_at: Date.now()
            }


            
            this.setState({messages:this.state.messages.concat(msg)})
            //Clean
            this.setState({textBoxValue : ""})
            
            
        }

    }


 
    render() {
        return(
            <Row className="h-100 w-100">

                <Col className="col-3 bg-info overflow-auto ">
                    <ChatRooms myId ={this.state.myId} handleChatRoomChange = {this.handleChatRoomChange} />
                </Col>



                <Col className=" bg-secondary h-100">
                    <Row className="row bg-primary header-footer-chat align-items-center">
                        <h5 className="ml-2 mb-0">Nombre</h5>
                    </Row>


                    <div className="bg-success content-chat overflow-auto ">
                        { ( this.state.roomId !== "" )  && 
                             <ChatRoomMessages 
                                messages= {this.state.messages}
                                roomId={this.state.roomId} 
                                myId ={this.state.myId}
                            />
                        }
                    </div>


                    <Row className="bg-danger header-footer-chat">
                        <input className="input-chat form-control h-100" type="text" onChange={this.handleTextBoxChange} value={this.state.textBoxValue} placeholder="type..."></input>
                        <button className="btn-info button-chat"  onClick={this.handleSendMessage}>Send...
                            <i className="fas fa-paper-plane"> </i>
                        </button>
                    </Row>
                </Col>

            </Row>
        )

    };
}

export default App;
