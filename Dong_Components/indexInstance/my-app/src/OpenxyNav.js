import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo_green from './img/logo_green.png';
import openxy_1 from './img/openxy_1.png';
import user_1 from './img/user_1.png'
import styled from 'styled-components';

const OpNav = styled.div`{
     width:100%;
     background-color: #80cbc4;
     opacity: 0.8;
}`;

const Logo = styled.img`{
    margin-left:3rem;
    width:2.5rem;
}`;

const LogoTittle = styled.img`{
    
}`;

const UserPic = styled.img`{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0rem;
}`;

const OpenxyItem = styled.div`{
    display:inline-block;
    background: transparent;
    border-radius: .25rem;
    text-align: center;
    font-size:0.7rem;
    font-family:'华文仿宋';
    color:#004d40;
    margin-left:0.5rem;
	margin-right:1rem;
    
    &:hover {
		background: #4db6ac;
	}
}`;

export default class OpenxyNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <OpNav>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">
                        <Logo src={logo_green} alt="openxy" />
                        <LogoTittle src={openxy_1} alt="openxy"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <OpenxyItem>
                                <NavItem>
                                    <NavLink href="#">首页</NavLink>
                                </NavItem>
                            </OpenxyItem>
                            <OpenxyItem>
                                <NavItem>
                                    <NavLink href="#">学习资源</NavLink>
                                </NavItem>
                            </OpenxyItem>
                            <OpenxyItem>
                                <NavItem>
                                    <NavLink href="#">博客</NavLink>
                                </NavItem>
                            </OpenxyItem>
                            <OpenxyItem>
                                <NavItem>
                                    <UserPic src={user_1} alt="point"/>
                                </NavItem>
                            </OpenxyItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </OpNav>
        );
    }
}