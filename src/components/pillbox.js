import React, { PropTypes } from 'react';


const Pillbox = props => (
  <div className="resource-pillbox">
    { props.label } <span className="glyphicon glyphicon-remove" id={ props.label } onClick={ props.handleRemoveResource }></span>
  </div>
);

Pillbox.propTypes = {
  label: PropTypes.string.isRequired
};

export default Pillbox;
