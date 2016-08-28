import React from 'react';
import { shallowComponent } from '../react_utils';

import ListItem from '../../src/components/listItem';

describe('./components/listItem', () => {
    it('Should render listItem', () => {
      const props = {
        title: 'Summary',
        data: ['abc', 'def']
      };
      const rendered = (
        <div className="col-xs-12">
          <h5 className="col-sm-12 summary-history-title">Summary</h5>
          <ul key="list-item-0">abc</ul>
          <ul key="list-item-0">def</ul>
        </div>
      );
      shallowComponent(<ListItem {...props} />).must.be.jsx(rendered);
    });
});
