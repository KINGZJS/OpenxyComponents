import React from 'react';
import { Button ,Row,Col} from 'reactstrap';
import styled from 'styled-components';

const Subfield = styled.div`
    width: 100%;
    min-height: 10rem;
	clear:both;
	margin-top:1rem;
	border:1px solid white;
	border-radius:0.1rem;
	background: white;
	
	ul{
	list-style: none;
	margin:0rem;
	padding-left: 0rem;
    }

   li{
	float: left;
	text-align: left;
	min-height: 10rem;
	line-height: 2rem;
	margin:0rem;
	font-size:0.6rem;

}
`;

const Left = styled.li`
   display: inline-block;
	width: 49%;
	
	h5{
	    display:inline-block;
	    margin-top:0.5rem;
	}
`;

const Label = styled.li`
	width: 0.5%;
	cursor: e-resize;
	background: #004d40;
`;

const Right = styled.li`
	display: inline-block;
	width: 50%;
	
	h5{
	    margin-top:0.5rem;
	}
`;

const OpenxyButton = styled(Button)`
    font-size:0.6rem;
`;

const Hr = styled.hr`
    margin:0;
`;

export default class OpenxySubfield extends React.Component{
    render(){
        const { SubLeftContent, SubRightContent } = this.props;
        return (
            <Subfield>
                <ul>
                    <Left>
                        <Row>
                            <Col xs="4"></Col>
                            <Col xs="4">
                                <h5>
                                    Difference
                                </h5>
                            </Col>
                            <Col xs="4">
                                <OpenxyButton outline color="info" size="sm">分栏显示</OpenxyButton>
                            </Col>
                        </Row>
                        <Hr/>
                            <div>
                              {SubLeftContent}
                            </div>
                    </Left>
                    <Label></Label>
                    <Right>
                        <Row>
                            <Col xs="4"></Col>
                            <Col xs="4">
                                <h5>
                                    Tutorial
                                </h5>
                            </Col>
                            <Col xs="4">
                            </Col>
                        </Row>
                        <Hr/>
                            <div>
                              {SubRightContent}
                            </div>
                    </Right>
                </ul>
            </Subfield>
    );
    }
}