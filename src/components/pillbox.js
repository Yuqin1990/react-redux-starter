import React, { PropTypes } from 'react';


const Pillbox = props => (
  <div className="resource-pillbox">
    <h6>{ props.label } <span className="label label-default"><span className="glyphicon glyphicon-remove" id={ props.label } onClick={ props.handleRemoveResource }></span></span></h6>
  </div>
);

Pillbox.propTypes = {
  label: PropTypes.string.isRequired
};

export default Pillbox;
