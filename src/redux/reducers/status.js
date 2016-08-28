import { handleActions } from 'redux-actions';
import _ from 'underscore';

export const initialState = {
  list: [{
    id: 0,
    url: 'bjstdmngbgr02.thoughtworks.com',
    status: 'idle',
    ip: '192.168.1.2',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu', 'firefox3', 'core-duo'],
    result: 'Deny'
  }, {
    id: 1,
    url: 'bjstdmngbgr03.thoughtworks.com',
    status: 'building',
    ip: '192.168.1.3',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'],
    result: ''
  }, {
    id: 2,
    url: 'bjstdmngbgr04.thoughtworks.com',
    status: 'building',
    ip: '192.168.1.4',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'],
    result: ''
  }, {
    id: 3,
    url: 'bjstdmngbgr05.thoughtworks.com',
    status: 'idle',
    ip: '192.168.1.4',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu'],
    result: 'Deny'
  }]
};

export const status = handleActions({
  REMOVE_RESOURCE: (state, action) => {
    let item = state.list[action.payload.id]
    let oldRs = item.resources;
    let resources = {
      resources: _.reject(oldRs, r => r === action.payload.resource)
    };
    let newItem = Object.assign(item, resources);
    return {
      list: [
        ...state.list,
        newItem
      ]
    }
  },
  ADD_RESOURCE: (state, action) => {
    let item = state.list[action.payload.id]
    let oldRs = item.resources;
    let resources = {
      resources: oldRs.concat(action.payload.newResrouces)
    };
    let newItem = Object.assign(item, resources);
    return {
      list: [
        ...state.list,
        newItem
      ]
    }
  }
}, initialState);
