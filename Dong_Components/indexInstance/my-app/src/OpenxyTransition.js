import React from 'react';
import styled from 'styled-components';
import OpenSource from './img/opensource.png';
import Idea from './img/idea.png';
import OpenMind from './img/openmind.png';

const ImgLeft = styled.img`{
        display: inline-block;
        float:left;
        margin-left: 6rem;
        width:33%;
        margin-top: 1.1rem;
        
        
}`;

const ImgCenter = styled.img`{
     display: inline-block;
     margin-left: 1.5rem;
     margin-top:2rem;
     margin-right:1.2rem;
     width:5%;
}`;

const ImgRight = styled.img`{
        display: inline-block;
        float:right;
        margin-right: 6rem;
        margin-top: 1.3rem;
        width: 28%;
}`;


export default class OpenxyTransition extends React.Component{
    render() {
        return (
            <div>
                <ImgLeft src={OpenSource} alt="opensource" />
                <ImgCenter src={Idea} alt="idea"/>
                <ImgRight src={OpenMind} alt="opensource"/>
            </div>
    )
    };
}