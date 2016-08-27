import React, { PropTypes, Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { connect } from 'react-redux';
import Home from '../components/home';
import { changeName } from '../redux/actions/hello';

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
    }

    render() {
        return (
            <Home {...this.props}
                handleSelect={ this.handleSelect }
            />
        )
    }
}

export function mapStateToProps(state) {
  return {
    name: state.hello.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (e) => dispatch(changeName(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
