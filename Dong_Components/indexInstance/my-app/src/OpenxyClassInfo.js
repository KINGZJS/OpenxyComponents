import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,CardLink } from 'reactstrap';
import styled from 'styled-components';
import Class1 from './img/class_pic.png';
import Class2 from './img/class_pic1.jpg';
import Class3 from './img/class_pic2.png';
import Pen from  './img/pen.png';

const OpenxyClass = styled.div`{
    border-left: 5rem solid #27a196;
	 border-bottom: 0.25rem solid #27a196;
	 padding-bottom: 1rem;
	 padding-left:1rem;
	 width:90%;
	 margin:2rem auto;
}`;

const OpenxyClassType = styled.div`{
    display: inline-block;
    float:left;
    margin-left:-4rem;
    margin-top:1rem;
	writing-mode:lr-tb;
	width: 1rem;
	line-height:2rem;
	font-size: 1rem;
}`;

const OpenxyCardTittle = styled.p`{
    font-size:0.8rem;
    margin:0.2rem;
}`;

const OpenxyCardText = styled.p`{
    font-size:0.6rem;
    margin:0.2rem;
}`;
/**
 *
 * 下面两个 OpenxyCardLinkLeft,OpenxyCardLinkRight
 * 样式差不多
 *
 * 可以用styled-component的 继承功能/或参数功能 减少大量代码
 *
 * https://www.styled-components.com/docs/basics#getting-started
 *
 * Extending Styles一节
 *
 * */
const OpenxyCardLinkLeft = styled.a`{
    float:left;
    font-size:0.6rem;
    color:#004d40;
    margin-left:0.2rem;
    margin-top:0.2rem;
    
    &:hover{
        text-decoration:none;
    }
}`;

const OpenxyCardLinkRight = styled.a`{
    float:right;
    font-size:0.6rem;
    color:#004d40;
    margin-right:0.6rem;
    margin-top:0.2rem;
    
    &:hover{
        text-decoration:none;
    }
    
    img {
        display:inline-block;
    }
}`;



const OpenxyClassInfo = (props) => {
    return (
        <OpenxyClass>
            <OpenxyClassType>最受欢迎</OpenxyClassType>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={Class1} alt="Card image cap" />
                    <CardBody>
                        <OpenxyCardTittle>软件项目管理
                        </OpenxyCardTittle>
                        <OpenxyCardText>可选的课程介绍</OpenxyCardText>
                        <OpenxyCardLinkLeft href="#">Card Link</OpenxyCardLinkLeft>
                        <OpenxyCardLinkRight href="#">
                            <img src={Pen} alt="学习人数"/>
                            1234567
                        </OpenxyCardLinkRight>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Class2} alt="Card image cap" />
                    <CardBody>
                        <OpenxyCardTittle>数据结构
                        </OpenxyCardTittle>
                        <OpenxyCardText>可选的课程介绍</OpenxyCardText>
                        <OpenxyCardLinkLeft href="#">Card Link</OpenxyCardLinkLeft>
                        <OpenxyCardLinkRight href="#">
                            <img src={Pen} alt="学习人数"/>
                            1234567
                        </OpenxyCardLinkRight>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Class3} alt="Card image cap" />
                    <CardBody>
                        <OpenxyCardTittle>JAVA程序设计
                        </OpenxyCardTittle>
                        <OpenxyCardText>可选的课程介绍</OpenxyCardText>
                        <OpenxyCardLinkLeft href="#">Card Link</OpenxyCardLinkLeft>
                        <OpenxyCardLinkRight href="#">
                            <img src={Pen} alt="学习人数"/>
                            1234567
                        </OpenxyCardLinkRight>
                    </CardBody>
                </Card>
            </CardDeck>
        </OpenxyClass>
    );
};

export default OpenxyClassInfo;