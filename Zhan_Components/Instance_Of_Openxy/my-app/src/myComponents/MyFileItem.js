import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card,Row} from 'reactstrap';
import styled from 'styled-components';
// import arrow from './img/arrow.png'


// const StyledButton=styled.button`
//     display: inline-block;
// 	font-size: 1em;
// 	padding: 0.25em 1em;
// 	background-color:#607B8B;
// 	// border-radius: 3px;
// 	width:100%;
// 	color:white;
//
// `;

const StyledButton=styled.button.attrs({
    backgroundColor:props=>props.backColor
})`
    display: inline-block;
	font-size: 1em;
	padding: 0.25em 1em;
	background-color:${props=>props.backgroundColor};
	width:100%;
	color:white;
	background-image:'./img/arrow.png'
	
`;


const StyledFileItem=styled.div`
    border-bottom:1px solid #EBEBEB;
    width:100%；
`;

class MyFileItem extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <StyledButton onClick={this.toggle}  backColor={this.props.backColor}>{this.props.btnTitle}</StyledButton>
                <Collapse isOpen={this.state.collapse}>
                    <Card>{
                     this.props.fileList.map((file)=>{
                         return(
                             <StyledFileItem>
                                 {file.name}
                             </StyledFileItem>
                         )
                     })
                    }
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default MyFileItem;