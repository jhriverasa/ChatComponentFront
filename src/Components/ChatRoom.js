import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ChatRoom extends Component {


    render() {
        return (
            <div>
                <Row>
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
            </div>
        )
    }
}

export default ChatRoom
