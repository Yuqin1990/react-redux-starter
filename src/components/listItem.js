import React, { PropTypes } from 'react';

const ListItem = props => (
  <div className="col-xs-12">
    <h5 className="col-sm-12 summary-history-title">{ props.title }</h5>
    {
      props.data.map((d,idx) => (<ul key={ `list-item-${idx}` }>{ d }</ul>))
    }
  </div>
);

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

export default ListItem;
