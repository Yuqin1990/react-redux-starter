import _ from 'underscore';
import React from 'react';

export default class Formmater {
  static getSummary(data) {
    let statusArr = _.uniq(_.pluck(data, 'status'));
    let returnArr = [];
    statusArr.map(sa => {
      let items = _.filter(data, d => {
        return d.status === sa;
      });
      returnArr.push(
        <div>
          <span className="col-xs-7">{ sa }</span>
          <span className="col-xs-5">{ items.length }</span>
        </div>
      )
    });
    return returnArr;
  }
}
