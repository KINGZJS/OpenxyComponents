import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import OpenxyNav from './OpenxyNav';
import OpenxyCarousel from './OpenxyCarousel';
// import OpenxyTransition from './OpenxyTransition';
import OpenxyClassInfo from './OpenxyClassInfo';
import Transition from './img/transition.png';
import Next from './img/next.png';
import OpenxyFooter from './OpenxyFooter'

const Motto = styled.img`{
    display:block;
    margin:1rem auto;
    width:80%;
}`;

const GrayRow = styled.div`{
    background-color: gray;
	opacity: 0.75;
	margin-left:-15px;
	margin-right:-15px;
}`;

const FullRow = styled.div`{
	margin-left:-15px;
	margin-right:-15px;
}`;

const ImgTransition = styled.img`{     
    margin-left:auto;
    margin-right:auto;
    display:block;
    width:5%;
}`;

const FixedOpenxyNav = styled.div`
    position: fixed;
     top:0rem;
     z-index: 2;
     width:100%;
`

 class Layout extends React.Component {
    render() {
        return (
            <Container fluid>
                <FullRow>
                <Row >
                    <Col>
                        <FixedOpenxyNav>
                            <OpenxyNav/>
                        </FixedOpenxyNav>
                    </Col>
                </Row>
                </FullRow>
                <Row>
                    <Col>
                        <OpenxyCarousel/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*<OpenxyTransition/>*/}
                        <Motto src={Transition} alt='motto'/>
                    </Col>
                </Row>
                <GrayRow>
                <Row>
                        <Col>
                            <OpenxyClassInfo/>
                        </Col>
                </Row>
                </GrayRow>
                <GrayRow>
                <Row>
                    <Col>
                        <ImgTransition src={Next} alt='next'/>
                    </Col>
                </Row>
                </GrayRow>
                <GrayRow>
                <Row>
                    <Col>
                        <OpenxyClassInfo/>
                    </Col>
                </Row>
                </GrayRow>
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

export default Layout;
