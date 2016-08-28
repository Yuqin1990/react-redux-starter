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
      <p>(separate multiple resource name with commas )</p>
      <input type="text" className="col-xs-12" onInput={ props.handleInputChange } value={ props.text }></input>
      <button onClick={ props.handleAddResource }>Add resource</button> <button onClick={ props.onHide }>close</button>
    </div>
  </Overlay>
);

export default Dialog;
