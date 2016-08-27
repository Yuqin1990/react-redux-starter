import React, { PropTypes, Component } from 'react';
import { Nav, NavItem, Button, ButtonToolbar } from 'react-bootstrap';

const Home = props => (
<div>
    <Nav bsStyle="tabs" activeKey="1" onSelect={ props.handleSelect }>
        <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
    </Nav>
    <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        <Button bsSize="large" active>Button</Button>
    </ButtonToolbar>
</div>
);

Home.propTypes = {
    name: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default Home;
