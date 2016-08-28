import { status } from '../../../src/redux/reducers/status';


const initialState = {
  list: [
    {
      id: 3,
      url: 'bjstdmngbgr05.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.4',
      path: '/var/lib/cruise-agent',
      resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'],
      result: 'Deny'
    }
  ]
};

describe('./redux/reducers/status', () => {
  describe('should hanele REMOVE_RESOURCE, ADD_RESOURCE action', () => {
    it('Should handle REMOVE_RESOURCE action and remove the resource', () => {
      const action = {
        type: 'REMOVE_RESOURCE',
        payload: {
          id: 3,
          resource: 'mysql'
        }
      };

      const expectedState = {
        list: [{
          id: 3,
          url: 'bjstdmngbgr05.thoughtworks.com',
          status: 'idle',
          ip: '192.168.1.4',
          path: '/var/lib/cruise-agent',
          resources: ['ubuntu', 'firefox3', 'core-duo'],
          result: 'Deny'
        }]
      };
      const result = status(initialState, action);
      result.must.eql(expectedState);
    });

    //If the newResrouces is same with existing reource, return initialState
    it('Should handle ADD_RESOURCE Action, return initialState if new resource is same with existing one', function() {
      const action = {
        type: 'ADD_RESOURCE',
        payload: {
          id: 3,
          newResrouces: ['firefox3']
        }
      };
      const result = status(initialState, action);
      result.must.eql(initialState);
    });

    it('Should handle ADD_RESOURCE Action, return initialState if new resource is empty', function() {
      const action = {
        type: 'ADD_RESOURCE',
        payload: {
          id: 3,
          newResrouces: []
        }
      };
      const result = status(initialState, action);
      result.must.eql(initialState);
    });

    it('Should handle ADD_RESOURCE Action, populate existing resources with new resources', function() {
      const action = {
        type: 'ADD_RESOURCE',
        payload: {
          id: 3,
          newResrouces: ['chrome']
        }
      };

      const expectedState = {
        id: 3,
        url: 'bjstdmngbgr05.thoughtworks.com',
        status: 'idle',
        ip: '192.168.1.4',
        path: '/var/lib/cruise-agent',
        resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo', 'chrome'],
        result: 'Deny'
      };
      const result = status(initialState, action);
      result.list.must.eql([expectedState]);
    });
  });
});
