import React, { PropTypes, Component } from 'react';
import _ from 'underscore';

import { Well, OverlayTrigger, Popover } from 'react-bootstrap';
import Pillbox from './pillbox';
import AddResourceDialog from './dialog';

class StatusBar extends Component {

  constructor(props) {
    super(props);
    this.handleRemoveResource = this.handleRemoveResource.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.initTarget = this.initTarget.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddResource = this.handleAddResource.bind(this);

    this.state={
      show: false,
      text: ''
    }
  }

  handleRemoveResource(e) {
    let resource = e.target.id;
    this.props.handleRemoveClick(this.props.data.id, resource);
  }

  handleAddResource() {
    if(!_.isEmpty(this.state.text.trim())){
      let newRs= this.state.text.split(',') || [];
      // Remove blank space before and after the resource
      this.props.handleAddClick(this.props.data.id, newRs.map(rs => rs.trim()));
    }
    this.setState({
      show: false,
      text: ''
    });
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  initTarget(target) {
    this._target = target;
  }

  showDialog() {
    this.setState({
      show: true
    });
  }

  hideDialog() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <Well bsSize="large">
        <div className="col-xs-1 status-icon">

        </div>
        <div className="col-xs-10 row status-details">
          <div className="col-xs-12">
            <span className="test-url">{ this.props.data.url }</span>
            <span className="test-status">{ this.props.data.status }</span>
            <span className="test-ip">{ this.props.data.ip }</span>
            <span className="test-path">{ this.props.data.path }</span>
          </div>
          <div className="col-xs-12">
              <a onClick={ this.showDialog } className="specify-resource-link">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Specify Resource
              </a>
              <div ref={ this.initTarget } className="popover-target">
                <AddResourceDialog
                  show={ this.state.show }
                  onHide={ this.hideDialog }
                  constainer={ this }
                  target={ this._target }
                  text={ this.state.text }
                  handleInputChange={ this.handleInputChange }
                  handleAddResource={ this.handleAddResource }
                />
              </div>

            <span>Resource:</span>
            {
              this.props.data.resources.map((r,idx) => (<Pillbox key={ `resource-pillbox-${idx}` } label={ r } handleRemoveResource={ this.handleRemoveResource }/>))
            }
          </div>
        </div>
        <div className="col-xs-1 test-result">
          <span className="glyphicon glyphicon-ban-circle"></span> { this.props.data.result }
        </div>

      </Well>
    );
  }

};

StatusBar.propTypes = {
  data: PropTypes.object.isRequired,
  handleRemoveClick: PropTypes.func.isRequired,
  handleAddClick: PropTypes.func.isRequired
};

export default StatusBar;
