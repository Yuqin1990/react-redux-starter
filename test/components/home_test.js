import React from 'react';
import { Tabs, Tab, Nav, NavItem, Panel, Modal, Button } from 'react-bootstrap';

import Home from '../../src/components/home';
import SignInModal from '../../src/components/modal';
import Content from '../../src/components/content';

import { shallowComponent } from '../react_utils';

describe('./components/home', () => {
    it('Should render the home components', () => {

      const props = {
        showSignInDialog: () => {},
        showModal: true,
        handleAddClick: () => {},
        handleRemoveClick: () => {},
        handleHideModal: () => {},
        hideSignInDialog: () => {}
      }
      const rendered = (
        <div className="tw-hw-app">
          <div className="sign-in-sign-out col-sm-12">
                <a className="sign-in-link" onClick={ () => {} }>Signed in</a> as <span className="member-label">Member</span>
                <span className="glyphicon glyphicon-arrow-right"></span><span className="sign-out-label">Sign Out</span>
          </div>
          <SignInModal
            showModal={ true }
            handleHideModal={ () => {} }
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

      shallowComponent(<Home {...props} />).must.be.jsx(rendered);
    });
});
