import React from 'react';
import { shallowComponent } from '../react_utils';

import { Overlay } from 'react-bootstrap';
import Dialog from '../../src/components/dialog';

describe('./components/dialog', () => {
    it('Should render dialog with add resource form', () => {
      const props = {
        show: false,
        handleRemoveResource: () => {},
        target: (<div>target node</div>),
        onHide: () => {},
        text: '',
        handleInputChange: () => {},
        handleAddResource: () => {}
      };
      const rendered = (
        <Overlay
          className="add-resource-dialog"
          show={ false }
          onHide={ () => {} }
          placement="bottom"
          container={ props.target }
        >
          <div>
            <svg className="create-resource-dialog-pointer" height="20" width="40">
              <polygon points="20,0 0,20 40,20" style={ { fill: '#E1EDD6', stroke: 'black', strokeWidth: 2 } } />
            </svg>
            <div className="create-resource-form">
              <p>(separate multiple resource name with commas )</p>
              <input type="text" className="col-xs-12" onInput={ () => {} } value={ '' }></input>
              <button onClick={ () => {} }>Add resource</button> <button onClick={ () => {} }>close</button>
            </div>
          </div>
        </Overlay>
      );

      shallowComponent(<Dialog {...props} />).must.be.jsx(rendered);
    });
});
