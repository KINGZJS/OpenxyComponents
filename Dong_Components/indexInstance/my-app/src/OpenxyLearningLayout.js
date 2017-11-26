import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import OpenxyNav from './OpenxyNav';
import OpenxyFooter from './OpenxyFooter';
import OpenxySubfield from './OpenxySubfield';

const GrayCol = styled(Col)`
    background-color:gray;
    opacity:0.8;
`;

const FullRow = styled.div`{
	margin-left:-15px;
	margin-right:-15px;
}`;

class OpenxyLearningLayout extends React.Component {
    render() {
        return (
            <Container fluid>
                <FullRow>
                    <Row >
                        <Col>
                            <OpenxyNav/>
                        </Col>
                    </Row>
                </FullRow>
                <Row>
                    <Col sm='2'></Col>
                    <GrayCol>
                        <OpenxySubfield/>
                    </GrayCol>
                </Row>
                <FullRow>
                    <Row>
                        <Col>
                            <OpenxyFooter/>
                        </Col>
                    </Row>
                </FullRow>
            </Container>
        );
    }
}

export default OpenxyLearningLayout;
