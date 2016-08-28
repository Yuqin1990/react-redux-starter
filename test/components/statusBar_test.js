import React from 'react';
import { Well, OverlayTrigger, Popover } from 'react-bootstrap';

import StatusBar from '../../src/components/statusBar';
import Pillbox from '../../src/components/pillbox';
import AddResourceDialog from '../../src/components/dialog';

import { shallowComponent } from '../react_utils';


describe('./components/statusBar', () => {
    it('Should render the StatusBar components with Deny result', () => {

      const props = {
        data: {
          url: 'www.test.com',
          status: 'building',
          ip: '1.2.3.4',
          path: 'src/yuqin/happy',
          resources: ['chrome', 'ubuntu'],
          result: 'Deny'
        }
      };
      const rendered = (
        <div className="well deny-result-well" bsSize="large">
          <div className="col-xs-1 status-icon">
            <svg height="50" width="50">
              <circle cx="25" cy="25" r="20" stroke="grey" strokeWidth="0" fill="grey" />
            </svg>
          </div>
          <div className="col-xs-9 row status-details">
            <div className="col-xs-12 status-items">
              <span className="test-url">www.test.com</span>
              <span className="test-status">building</span>
              <span className="test-ip">1.2.3.4</span>
              <span className="test-path">src/yuqin/happy</span>
            </div>
            <div className="col-xs-12 status-resources">
                <a onClick={ () => {} } className="specify-resource-link">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> <span className="specify-resource-label">Specify Resource</span>
                </a>
                <span className="resource-label">  Resource:</span>

                <Pillbox key="resource-pillbox-0" label="chrome" handleRemoveResource={ () => {} }/>
                <Pillbox key="resource-pillbox-1" label="ubuntu" handleRemoveResource={ () => {} }/>
                <div ref={ () => {} } className="col-xs-12">
                  <AddResourceDialog
                    show={ false }
                    onHide={ () => {} }
                    target={ undefined }
                    text={ '' }
                    handleInputChange={ () => {}  }
                    handleAddResource={ () => {}  }
                  />
                </div>
            </div>
          </div>
          <div className="col-xs-2 test-result">
            <span className="glyphicon glyphicon-ban-circle"></span>
            <span className="deny-label"> Deny</span>
          </div>
        </div>
      );

      shallowComponent(<StatusBar {...props} />).must.be.jsx(rendered);
    });

    it('Should render the StatusBar components with no result', () => {

      const props = {
        data: {
          url: 'www.test.com',
          status: 'building',
          ip: '1.2.3.4',
          path: 'src/yuqin/happy',
          resources: ['chrome', 'ubuntu'],
          result: ''
        }
      };
      const rendered = (
        <div className="well normal-result-well" bsSize="large">
          <div className="col-xs-1 status-icon">
            <svg height="50" width="50">
              <circle cx="25" cy="25" r="20" stroke="grey" strokeWidth="0" fill="grey" />
            </svg>
          </div>
          <div className="col-xs-9 row status-details">
            <div className="col-xs-12 status-items">
              <span className="test-url">www.test.com</span>
              <span className="test-status">building</span>
              <span className="test-ip">1.2.3.4</span>
              <span className="test-path">src/yuqin/happy</span>
            </div>
            <div className="col-xs-12 status-resources">
                <a onClick={ () => {} } className="specify-resource-link">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> <span className="specify-resource-label">Specify Resource</span>
                </a>
                <span className="resource-label">  Resource:</span>

                <Pillbox key="resource-pillbox-0" label="chrome" handleRemoveResource={ () => {} }/>
                <Pillbox key="resource-pillbox-1" label="ubuntu" handleRemoveResource={ () => {} }/>
                <div ref={ () => {} } className="col-xs-12">
                  <AddResourceDialog
                    show={ false }
                    onHide={ () => {} }
                    target={ undefined }
                    text={ '' }
                    handleInputChange={ () => {}  }
                    handleAddResource={ () => {}  }
                  />
                </div>
            </div>
          </div>
          <div className="col-xs-2 test-result">
            <span className="deny-label"> </span>
          </div>
        </div>
      );

      shallowComponent(<StatusBar {...props} />).must.be.jsx(rendered);
    });
});
