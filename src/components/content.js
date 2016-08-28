import React, { PropTypes, Component } from 'react';

import { Nav, NavItem, Panel, ListGroup, PageHeader } from 'react-bootstrap';

// Subcomponents
import StatusBar from './statusBar';
import ListItem from './listItem';

//Utils
import FormatterUtils from '../utils/formatter';

const header = (
  <Nav bsStyle="pills" activeKey={2}>
    <NavItem key="navItem-1" eventKey={0} disabled><h4>Agents</h4></NavItem>
    <NavItem key="navItem-2" eventKey={1}>All</NavItem>
    <NavItem key="navItem-3" eventKey={2}>Physical</NavItem>
    <NavItem key="navItem-4" eventKey={3}>Virtual</NavItem>
  </Nav>
);

const Content = (props) => (
  <Panel header={ header }>
    <div className="col-sm-9 status-bar-list">
       {
          props.status.map(d => (
            <StatusBar {...props}
              key={ `status-bar-${d.id}` }
              data={ d }
            />
          )
        )
       }
    </div>
    <div className="col-sm-3 row status-summary-history">
      <ListItem title="Summary" data={ FormatterUtils.getSummary(props.status) }/>
      <ListItem title="History" data={ props.history }/>
    </div>
  </Panel>
);


export default Content;