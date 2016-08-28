import React, { PropTypes, Component } from 'react';

//React-Bootstrap Components
import { Tabs, Tab, Nav, NavItem, Panel, Modal, Button } from 'react-bootstrap';

//Subcomponents
import Content from './content';
import SignInModal from './modal';

const Home = props => (
  <div className="tw-hw-app">
    <div className="sign-in-sign-out col-sm-12">
          <a className="sign-in-link" onClick={ props.showSignInDialog }>Signed in</a> as <span className="member-label">Member</span>
          <span className="glyphicon glyphicon-arrow-right"></span><span className="sign-out-label">Sign Out</span>
    </div>
    <SignInModal
      showModal={ props.showModal }
      handleHideModal={ props.hideSignInDialog }
    />
    <div className="cruise-form col-sm-12">
        <h2 className="form-title col-sm-2">Cruise</h2>
        <Tabs defaultActiveKey={3} >
          <Tab eventKey={4} title="HELP"><Panel header={ <h1>Under Construction</h1> }></Panel></Tab>
          <Tab eventKey={3} title="AGENTS">{ <Content { ...props }/>}</Tab>
          <Tab eventKey={2} title="MY CRUISE"><Panel header={ <h1>Under Construction</h1> }></Panel></Tab>
          <Tab eventKey={1} title="DASHBOARD"><Panel header={ <h1>Under Construction</h1> }></Panel></Tab>
        </Tabs>
    </div>
    <h6 className="col-xs-12">Copyright: Thoughtworks Inc.</h6>
  </div>
);

Home.propTypes = {
    showModal: PropTypes.bool.isRequired,
    showSignInDialog: PropTypes.func.isRequired,
    hideSignInDialog: PropTypes.func.isRequired
};

export default Home;

/**
 * Component for rendering the home page
 * @component Home
 */

/**
 * Whether to show the sign in modal
 * @prop showModal
 * @type boolean
 */

/**
 * Callback to close the modal
 * @prop hideSignInDialog
 * @type function
 */

/**
 * Callback to open the signIn modal
 * @prop showSignInDialog
 * @type function
 */
