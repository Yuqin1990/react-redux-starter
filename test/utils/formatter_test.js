import React from 'react';
import Formatter from '../../src/utils/formatter';

describe('./utils/formatter', () => {
    it('Should calculate the number of tests for each status', () => {
      const data = [
        {
          id: 1,
          status: 'idle'
        },
        {
          id: 2,
          status: 'building'
        }, {
          id: 3,
          status: 'building'
        }
      ];
      const result = Formatter.getSummary(data);
      const expectedResult = [
        (
          <div>
            <span className="col-xs-7">idle</span>
            <span className="col-xs-5">{ 1 }</span>
          </div>
        ), (
          <div>
            <span className="col-xs-7">building</span>
            <span className="col-xs-5">{ 2 }</span>
          </div>
        )

      ];
      result.must.eql(expectedResult);
    });


});
