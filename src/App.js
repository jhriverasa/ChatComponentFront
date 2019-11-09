import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Container from 'react-bootstrap/Container';
import ChatRoomMessages from './Components/ChatRoomMessages';
import ChatRooms from './Components/ChatRooms';

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
    
        this.handleChatRoomMessagesChange= this.handleChatRoomMessagesChange.bind(this);
        this.handleChatRoomChange = this.handleChatRoomChange.bind(this);
    }
    
    //My id =  (userId)
    state = {
        roomId: "",
        myId: 1
    }

    handleChatRoomChange(id){
        console.log("you clicked room :"+ id)
        this.setState({roomId: id})
    }

    handleChatRoomMessagesChange(){

    }
 
    render() {
        return(
            <Row className="row h-100">

                <Col className="col-3 bg-info overflow-auto ">
                    <ChatRooms handleChatRoomChange = {this.handleChatRoomChange} />
                </Col>



                <Col className=" bg-secondary h-100">
                    <Row className="row bg-primary header-footer-chat align-items-center">
                        <h5 className="ml-2 mb-0">Nombre</h5>
                    </Row>


                    <div className="bg-success content-chat overflow-auto ">
                        <ChatRoomMessages 
                            roomId={this.state.roomId} 
                            myId ={this.state.myId}
                        />
                    </div>


                    <Row className="bg-danger header-footer-chat">
                        <input className="input-chat form-control h-100" type="text" placeholder="Escribir..."></input>
                        <button className="button-chat" >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </Row>
                </Col>

            </Row>
        )

    };
}

export default App;
