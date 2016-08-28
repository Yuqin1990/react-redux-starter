import React, { PropTypes, Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { connect } from 'react-redux';
import Home from '../components/home';
import { addResource, removeResource } from '../redux/actions/status';

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.showSignInDialog = this.showSignInDialog.bind(this);
        this.hideSignInDialog = this.hideSignInDialog.bind(this);

        this.state = {
          showModal: false
        };
    }

    showSignInDialog() {
      this.setState({
        showModal: true
      });
    }

    hideSignInDialog() {
      this.setState({
        showModal: false
      });
    }

    render() {
        return (
            <Home {...this.props}
              showSignInDialog={ this.showSignInDialog }
              hideSignInDialog={ this.hideSignInDialog }
              showModal={ this.state.showModal }
            />
        )
    }
}

export function mapStateToProps(state) {
  return {
    status: state.status.list,
    history: state.history.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleRemoveClick: (id, resource) => dispatch(removeResource({id, resource})),
    handleAddClick: (id, newResrouces) => dispatch(addResource({id, newResrouces}))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
