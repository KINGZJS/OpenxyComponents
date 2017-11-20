import React, { Component } from 'react';
import { 
  Container,
  Row
 } from 'reactstrap';

import EuCourses from "./myComponents/EuCourses"
import MyNav from "./myComponents/MyNav"
import MyCarousel from "./myComponents/MyCarousel"
import banner from "./banner.jpg"

//轮播图的数据
const items = [
    { src:banner,
        altText: 'Hello World!',
        caption: 'A new generation of online learning platform',
        capButton:'敬请期待'

    },
    {
        src:banner,
        altText: 'Slide 2',
        caption: 'Slide 2',
        capButton:'敬请期待'
    },
    {
        src:banner,
        altText: 'Slide 3',
        caption: 'Slide 3',
        capButton:'敬请期待'
    }
];


//课程数据
const rowCourses=[
    {
    pic:'http://www.wanke001.com/Course/Img/624328145D0DDBA1C9DB294DB8B8D610/11dbf684-d0a9-4c07-9d6a-e14271342e95.png',
    cardTitle:'CPLD/FPGA应用设计',
    carText:'8所高校 10人学习',
    sum:'Last updated 3 mins ago'
    },
    {
        pic:'http://www.wanke001.com/Course/Img/624328145D0DDBA1C9DB294DB8B8D610/11dbf684-d0a9-4c07-9d6a-e14271342e95.png',
        cardTitle:'CPLD/FPGA应用设计',
        carText:'8所高校 10人学习',
        sum:'Last updated 3 mins ago'
    },
    {
        pic:'http://www.wanke001.com/Course/Img/624328145D0DDBA1C9DB294DB8B8D610/11dbf684-d0a9-4c07-9d6a-e14271342e95.png',
        cardTitle:'CPLD/FPGA应用设计',
        carText:'8所高校 10人学习',
        sum:'Last updated 3 mins ago'
    },
    {
        pic:'http://www.wanke001.com/Course/Img/624328145D0DDBA1C9DB294DB8B8D610/11dbf684-d0a9-4c07-9d6a-e14271342e95.png',
        cardTitle:'CPLD/FPGA应用设计',
        carText:'8所高校 10人学习',
        sum:'Last updated 3 mins ago'
    }
];

const courses=[
    rowCourses,rowCourses,rowCourses
];


//导航栏链接数据
const navLinkList=[
    {
        src:'https://github.com/reactstrap/reactstrap',
        linkName:'首页'
    },
    {
        src:'https://github.com/reactstrap/reactstrap',
        linkName:'在线学习'
    }
];

//样式


class MainPage extends Component{
  render(){
    return(
        <Container fluid>

                <Row >
                    <MyNav brand={"Open-xy"} navLinkList={navLinkList}/>
                </Row>
                <span/>
                <Row>
                    <MyCarousel items={items}/>
                </Row>
            <Container>
                <Row >
                    <EuCourses courses={courses}/>
                </Row>
            </Container>
        </Container>

    );
  }
}

export default MainPage;