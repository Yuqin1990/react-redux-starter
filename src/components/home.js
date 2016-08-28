import React, { PropTypes, Component } from 'react';

//React-Bootstrap Components
import { Tabs, Tab, Nav, NavItem, Panel, Modal, Button } from 'react-bootstrap';

//Subcomponents
import Content from './content';
import SignInModal from './modal';

const Home = props => (
  <div>
    <div className="sign-in-sign-out col-sm-12">
        <a className="sign-in-link" onClick={ props.showSignInDialog }>Signed in</a> <span>as Member Sign Out</span>
        <SignInModal
          showModal={ props.showModal }
          handleHideModal={ props.hideSignInDialog }
        />
    </div>
    <div className=" cruise-form col-sm-12">
        <h2 className="form-title col-sm-8">Cruise</h2>
        <Tabs defaultActiveKey={3} >
          <Tab eventKey={1} title="DASHBOARD"><Panel header={ <h1>Under Construction</h1> }></Panel></Tab>
          <Tab eventKey={2} title="MY CRUISE"><Panel header={ <h1>Under Construction</h1> }></Panel></Tab>
          <Tab eventKey={3} title="AGENTS">{ <Content { ...props }/>}</Tab>
          <Tab eventKey={4} title="HELP"><Panel header={ <h1>Under Construction</h1> }></Panel></Tab>
        </Tabs>
    </div>
    <h6 className="col-xs-12">Copyright: Thoughtworks Inc.</h6>
  </div>
);

Home.propTypes = {
    handleAddClick: PropTypes.func.isRequired,
    handleRemoveClick: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    hideSignInDialog: PropTypes.func.isRequired
};

export default Home;
