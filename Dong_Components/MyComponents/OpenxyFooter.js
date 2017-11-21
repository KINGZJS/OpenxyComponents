import React from 'react';
import styled from 'styled-components';
import logo_green from './img/logo_green.png';
import openxy_1 from './img/openxy_1.png';
import Wechat from './img/wechat.png';

const Footer = styled.div`{
    width:100%;
	background-color: #80cbc4;
	opacity: 0.8;
	padding-bottom: 1rem;
}`;

const Logo = styled.img`{
    width:2.5rem;
    margin:2rem 0rem 1rem 5rem;
}`;

const LogoTittle = styled.img`{
    margin:2rem 1rem 1rem 0rem;
}`;

const OpenxyIntroduce = styled.div`{
     > p{
        display: inline-block;;
        font-size: 0.55rem;
        font-family:"幼圆";
        color: #004d40;
        width: 35%;
        margin-left: 5rem;
    }
    
     ul{
        font-size:0.6rem;
        list-style: none;
        display: inline-block;
        margin-top: -0.4rem;
        float: right;
    }
    
     ul li{
        float: right;
        margin-right: 5rem;
    }
    
     ul li+li{
        margin-right: 1.5rem;
    }
    
     ul li a{
        color: black;
        /*color: #004d40;*/
    }
    
     ul li a{
        color: black;
        /*color: #004d40;*/
    }
    
    div{
        display: inline-block;
        color: black;
        /*color: #004d40;*/
        float: right;
        margin-top:-2rem;
        margin-right: 14rem;
        font-size:0.6rem;
    }
    
     div img{
        margin-left: 1rem;
        margin-top: 0.2rem;
        width:1rem;
    }

}`;

const OpenxCopyRight = styled.div`{
    color: #004d40;
	font-size: 0.5rem;
	font-family: "微软雅黑";
	margin-left: 5rem;
}`;

export default class OpenxyFooter extends React.Component{
    render(){
        return(
            <Footer>
                <Logo src={logo_green} alt="openxy"/>
                <LogoTittle src={openxy_1} alt="openxy"/>
                        <OpenxyIntroduce>
                            <p>
                                openxy是基于balabala理念，以培养学生能力为目标的院校交互式翻转课堂教学平台。对于普通用户，玩课可以提供各类优秀课程供学习。对于签约学校的师生，玩课以线上微课教学和线下课堂互动相结合，将线上学习纳入教学考评体系，实现师生实时互动，课程测验，分数考评，个性化学习体验等全系列课程运营服务.
                            </p>
                            <ul>
                                <li><a href="#">关于我们</a></li>
                                <li><a href="#">联系我们</a></li>
                                <li><a href="#">帮助中心</a></li>
                                <li><a href="#">合作伙伴</a></li>
                            </ul>
                            <div>关注我们：<a><img src={Wechat} alt="wechat.png"/></a></div>
                        </OpenxyIntroduce>
                        <OpenxCopyRight>
                            Copyright © xxxx-xxxx 杭州balabala公司 all rights reserved 浙balabala
                        </OpenxCopyRight>
            </Footer>
        );
    }
}
