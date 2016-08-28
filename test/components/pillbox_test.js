import React from 'react';
import { shallowComponent } from '../react_utils';

import Pillbox from '../../src/components/pillbox';

describe('./components/pillbox', () => {
    it('Should render pillbox with resource name and remove icon', () => {
      const props = {
        label: 'chrome',
        handleRemoveResource: () => {}
      };
      const rendered = (
        <div className="resource-pillbox">
          chrome <span className="glyphicon glyphicon-remove" id="chrome" onClick={ () => {} }></span>
        </div>
      );

      shallowComponent(<Pillbox {...props} />).must.be.jsx(rendered);
    });
});
