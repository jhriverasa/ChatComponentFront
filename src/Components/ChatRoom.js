import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ChatRoom.css';

class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(){
        
        this.props.handleChatRoomChange(this.props.id);

    }

    render() {
        return (
            
                <Row className="chat-room-div" onClick={this.handleClick}>
                    <Col className="col-2 p-0 align-self-center">
                        <img className="img-fluid" src={this.props.src} alt=":)" ></img>
                    </Col>
                    <Col className="col-10 p-0">
                        <Row className="row m-0">
                            <h5 className="col-9 p-0 m-0">
                                {this.props.receiverName}
                            </h5>
                            <p className="col-3 p-0 m-0">
                                {this.props.date}
                            </p>
                        </Row>
                        <Row className="row m-0">
                            <p className="m-0">
                                {this.props.lastMsg}
                            </p>
                        </Row>
                    </Col>
                </Row>
            
        )
    }
}

export default ChatRoom
