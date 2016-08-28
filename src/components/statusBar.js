import React, { PropTypes, Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';

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
    let targetClassName = classNames({
      'popover-target': this.state.show,
      'col-xs-12': true
    });
    return (
      <div className={ this.props.data.result === 'Deny' ? 'well deny-result-well': 'well normal-result-well' } bsSize="large">
        <div className="col-xs-1 status-icon">
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="20" stroke="grey" strokeWidth="0" fill="grey" />
          </svg>
        </div>
        <div className="col-xs-9 row status-details">
          <div className="col-xs-12 status-items">
            <span className="test-url">{ this.props.data.url }</span>
            <span className="test-status">{ this.props.data.status }</span>
            <span className="test-ip">{ this.props.data.ip }</span>
            <span className="test-path">{ this.props.data.path }</span>
          </div>
          <div className="col-xs-12 status-resources">
              <a onClick={ this.showDialog } className="specify-resource-link">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> <span className="specify-resource-label">Specify Resource</span>
              </a>
              <span className="resource-label">  Resource:</span>
              {
                this.props.data.resources.map((r,idx) => (<Pillbox key={ `resource-pillbox-${idx}` } label={ r } handleRemoveResource={ this.handleRemoveResource }/>))
              }
              <div ref={ this.initTarget } className={ targetClassName }>
                <AddResourceDialog
                  show={ this.state.show }
                  onHide={ this.hideDialog }
                  target={ this._target }
                  text={ this.state.text }
                  handleInputChange={ this.handleInputChange }
                  handleAddResource={ this.handleAddResource }
                />
              </div>


          </div>
        </div>
        <div className="col-xs-2 test-result">
          {
            this.props.data.result === 'Deny' ? <span className="glyphicon glyphicon-ban-circle"></span> : null
          }
          <span className="deny-label"> { this.props.data.result }</span>
        </div>
      </div>
    );
  }

};

StatusBar.propTypes = {
  data: PropTypes.object.isRequired,
  handleRemoveClick: PropTypes.func.isRequired,
  handleAddClick: PropTypes.func.isRequired
};

export default StatusBar;

/**
 * Component for rendering signle test details and result
 * @component StatusBar
 */

/**
 * Test detatils like: url, status, path, result, resources
 * @prop data
 * @type object
 */

/**
 * Callback triggered when user click on add resource button
 * @prop handleAddClick
 * @type function
 */

/**
 * Callback triggered when user click on a resource's close button
 * @prop handleRemoveClick
 * @type function
 */

/**
 * Callback triggered when user click on a resource's close button
 * @prop handleRemoveClick
 * @type function
 */

/**
 * Keep track of user's input for new resources
 * @state text
 * @type string
 */

/**
 * Whether to show the create new resource dialog
 * @state show
 * @type boolean
 */
