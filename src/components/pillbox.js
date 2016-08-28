import React, { PropTypes } from 'react';


const Pillbox = props => (
  <div className="resource-pillbox">
    { props.label } <span className="glyphicon glyphicon-remove" id={ props.label } onClick={ props.handleRemoveResource }></span>
  </div>
);

Pillbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleRemoveResource: PropTypes.func.isRequired
};

export default Pillbox;

/**
 * Component for rendering signle resource with remove button
 * @component Pillbox
 */

/**
 * Callback trigged when user click on remove button
 * @prop handleRemoveResource
 * @type function
 */
