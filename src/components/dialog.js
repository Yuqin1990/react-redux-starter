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

export default Dialog;
