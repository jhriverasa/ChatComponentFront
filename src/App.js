import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import ChatMessage from './Components/ChatMessage';
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


function App() {
        
        
    return (
        <Container>
            <Row className="row h-100">

                <Col className="col-3 bg-info overflow-auto ">
                    <ChatRooms/>
                </Col>



                <Col className=" bg-secondary h-100">
                    <Row className="row bg-primary header-footer-chat align-items-center">
                        <h5 className="ml-2 mb-0">Nombre</h5>
                    </Row>

                    <div className="bg-success content-chat overflow-auto ">
                        <div className="d-flex flex-column w-100">
                            <ChatMessage msg= "message test" isLeft={false} />
                            <ChatMessage msg= "message test" isLeft={true} />
                            <ChatMessage msg= "message test" isLeft={false} />
                            <ChatMessage msg= "message test" isLeft={true} />
                            <ChatMessage msg= "message test" isLeft={true} />
        
                                

                        </div>
                    </div>

                    <Row className="bg-danger header-footer-chat">
                        <input className="input-chat form-control h-100" type="text" placeholder="Escribir..."></input>
                        <button className="button-chat" >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </Row>
                </Col>


            </Row>
        </Container>
    );
}

export default App;
