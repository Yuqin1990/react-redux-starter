import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

const SignInModal = (props) => (
  <Modal show={ props.showModal } onHide={ props.handleHideModal }>
    <Modal.Header>
      <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <input className="col-xs-12" placeholder="Username"></input>
      <input className="col-xs-12" placeholder="Password"></input>
    </Modal.Body>

    <Modal.Footer>
      <Button className="modal-cancel-btn" onClick={ props.handleHideModal }>Cancel</Button>
      <Button bsStyle="primary">Sign In</Button>
    </Modal.Footer>
  </Modal>
);

SignInModal.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};

export default SignInModal;
