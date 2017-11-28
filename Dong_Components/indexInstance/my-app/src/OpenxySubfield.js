import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Subfield = styled.div`
    width: 100%;
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
	line-height: 2rem;
	margin:0rem;
}
`;

const Left = styled.li`
   display: inline-block;
	width: 49%;
	
	h5{
	    display:inline-block;
	    position:relative;
	    top:0.5rem;
	    left:14%;
	}
`;

const Label = styled.li`
    float: left;
	width: 0.5%;
	cursor: e-resize;
	background: #004d40;
`;

const Right = styled.li`
	display: inline-block;
	width: 50%;
	
	h5{
	    margin-top:0.7rem;
	}
`;

const OpenxyButton = styled(Button)`
    width:4rem;
    font-size:0.6rem;
    float:right;
    margin-top:0.8rem;
    margin-right:0.5rem;
`;

export default class OpenxySubfield extends React.Component{
    render(){
        const { SubLeftContent, SubRightContent } = this.props;
        return (
            <Subfield>
                <ul>
                    <Left>
                        <div>
                            <h5>
                                Difference
                            </h5>
                            <OpenxyButton outline color="info" size="sm">分栏显示</OpenxyButton>
                        </div>
                        <hr/>
                            <div>
                              {SubLeftContent}
                            </div>
                    </Left>
                    <Label></Label>
                    <Right>
                        <h5>
                            Tutorial
                        </h5>
                        <hr/>
                            <div>
                              {SubRightContent}
                            </div>
                    </Right>
                </ul>
            </Subfield>
    );
    }
}