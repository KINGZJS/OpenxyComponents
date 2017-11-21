import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


class MyNav extends Component {
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
        const List=this.props.navLinkList.map((navItem)=>{
            return(
                <NavItem>
                    <NavLink href={navItem.src}>{navItem.linkName}</NavLink>
                </NavItem>
            );
        });

        return (
            <div>
                <Navbar color="faded" light expand="md" >
                    <NavbarBrand href="/">{this.props.brand}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/*<NavItem>*/}
                                {/*<NavLink href="/components/">{this.props.link_one}</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="https://github.com/reactstrap/reactstrap">{this.props.link_two}</NavLink>*/}
                            {/*</NavItem>*/}
                            {List}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export  default MyNav;
