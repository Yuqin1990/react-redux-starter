import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { shallowComponent } from '../react_utils';

import SignInModal from '../../src/components/modal';

describe('./components/modal', () => {
    it('Should render the sign in modal', () => {
      const props = {
        showModal: true,
        handleHideModal: () => {}
      };
      const rendered = (
        <Modal show={ true } onHide={ () => {} }>
          <Modal.Header>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input className="col-xs-12" placeholder="Username"></input>
            <input className="col-xs-12" placeholder="Password"></input>
          </Modal.Body>

          <Modal.Footer>
            <Button className="modal-cancel-btn" onClick={ () => {} }>Cancel</Button>
            <Button bsStyle="primary">Sign In</Button>
          </Modal.Footer>
        </Modal>
      );

      shallowComponent(<SignInModal {...props} />).must.be.jsx(rendered);
    });
});
