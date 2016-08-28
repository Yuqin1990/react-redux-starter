import React, { PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Overlay } from 'react-bootstrap';

const Dialog = (props) => (
  <Overlay
    className="add-resource-dialog"
    show={ props.show }
    onHide={ props.onHide }
    placement="bottom"
    container={ props.target }
  >
    <div>
      <svg className="create-resource-dialog-pointer" height="20" width="40">
        <polygon points="20,0 0,20 40,20" style={ { fill: '#E1EDD6', stroke: 'black', strokeWidth: 2 } } />
      </svg>
      <div className="create-resource-form">
        <p>(separate multiple resource name with commas )</p>
        <input type="text" className="col-xs-12" onInput={ props.handleInputChange } value={ props.text }></input>
        <button onClick={ props.handleAddResource }>Add resource</button> <button onClick={ props.onHide }>close</button>
      </div>
    </div>
  </Overlay>
);

Dialog.propTypes = {
    show: PropTypes.bool,
    target: PropTypes.node,
    onHide: PropTypes.func,
    handleInputChange: PropTypes.func,
    handleAddResource: PropTypes.func
};

export default Dialog;

/**
 * Component for displaying add resource dialog
 * @component Dialog
 */

/**
 * Whether to display the dialog
 * @prop show
 * @type boolean
 */

/**
 * The target component to attach the dialog to.
 * @prop target
 * @type object
 */

/**
 * Callback triggered when modal closed
 * @prop onHide
 * @type function
 */

/**
 * Callback triggered when user input
 * @prop handleInputChange
 * @type function
 */

/**
 * Callback triggered when click on add resource
 * @prop handleAddResource
 * @type function
 */
