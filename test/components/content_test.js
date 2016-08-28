import React from 'react';
import { Tabs, Tab, Nav, NavItem, Panel, Modal, Button } from 'react-bootstrap';

import Content from '../../src/components/content';
import StatusBar from '../../src/components/statusBar';
import ListItem from '../../src/components/listItem';

import FormatterUtils from '../../src/utils/formatter';

import { shallowComponent } from '../react_utils';


const header = (
  <Nav bsStyle="pills" activeKey={2}>
    <NavItem key="navItem-1" eventKey={0} disabled><h4>Agents</h4></NavItem>
    <NavItem key="navItem-2" className="nav-pills-item" eventKey={1}>All</NavItem>
    <NavItem key="navItem-3" className="nav-pills-item" eventKey={2}>Physical</NavItem>
    <NavItem key="navItem-4" className="nav-pills-item" eventKey={3}>Virtual</NavItem>
  </Nav>
);

describe('./components/content', () => {
    it('Should render the Content components', () => {

      const props = {
        status: [{
            id: 0,
            status: 'idle'
          }, {
            id: 1,
            status: 'building'
          }
        ],
        history: ['abc', 'def'],
        handleRemoveClick: () => {},
        handleAddClick: () => {}
      }
      const rendered = (
        <Panel header={ header }>
          <div className="col-sm-9 status-bar-list">
             <StatusBar {...props} key="status-bar-0" data={ props.status[0] } />
             <StatusBar {...props} key="status-bar-1" data={ props.status[1] } />
          </div>
          <div className="col-sm-3 row status-summary-history">
            <ListItem title="Summary" data={ FormatterUtils.getSummary(props.status) }/>
            <ListItem title="History" data={ props.history }/>
          </div>
        </Panel>
      );

      shallowComponent(<Content {...props} />).must.be.jsx(rendered);
    });
});
