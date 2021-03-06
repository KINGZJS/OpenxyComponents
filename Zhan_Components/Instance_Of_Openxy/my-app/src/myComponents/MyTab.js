import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import FileTree from './MyFileTree'
import MyFileItem from "./MyFileItem";

const StyledTabContent=styled(TabContent)`    
    // border:1px solid #ddd;
    // border-top:none;
    padding:5px;
    text-align:center;
`;

const deletedFiles=[
    {name:'f1'},
    {name:'f2'},
    {name:'f3'},
    {name:'f4'}
];

const modifiedFiles=[
    {name:'f1'},
    {name:'f2'},
    {name:'f3'}
];

const addedFiles=[
    {name:'f1'}
];


const StyledTabPane=styled(TabPane)`
    text-align:left;
`;

const StyledNavItem=styled(NavItem)`
    width:50%;
`;

const StyledNavLink=styled(NavLink)`
    width:100%;
    text-align:center;
`;



class MyTab extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        const { PropsFileTree } = this.props;
        return (
            <div>
                <Nav tabs>
                    <StyledNavItem>
                        <StyledNavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Course Tree
                        </StyledNavLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledNavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Related Files
                        </StyledNavLink>
                    </StyledNavItem>
                </Nav>
                <StyledTabContent>
                    <TabContent activeTab={this.state.activeTab}>
                        <StyledTabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                  {PropsFileTree}
                                  <FileTree/>
                                </Col>
                            </Row>
                        </StyledTabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <MyFileItem backColor={'#CD4F39'} btnTitle={'Deleted Files'} fileList={deletedFiles}/>
                                    <MyFileItem backColor={'#36648B'} btnTitle={'Modified Files'} fileList={modifiedFiles}/>
                                    <MyFileItem backColor={'#2E8B57'} btnTitle={'Added Files'} fileList={addedFiles}/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </StyledTabContent>
            </div>
        );
    }
}

export default MyTab;