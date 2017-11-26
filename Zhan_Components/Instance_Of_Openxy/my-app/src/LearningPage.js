import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import MyTab from "./myComponents/MyTab";

class LearningPage extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col xs="3">
                        <MyTab/>
                    </Col>

                </Row>
            </Container>
        )
    }
}

export  default  LearningPage;