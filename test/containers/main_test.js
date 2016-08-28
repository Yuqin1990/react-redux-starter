import { mapStateToProps } from '../../src/containers/main';

describe('./containers/main', function() {
  describe('.mapStateToProps', function() {
    it('Should return correct props from state', function() {
      const state = {
        status: {
          list: [
            {
              id: 1,
              url: 'www.test.com',
              status: 'idle',
              path: '1.192.168.1.2',
              path:'src/happy',
              resources: []
            }
          ]
        },
        history: {
          list: ['abc', 'defgh']
        }
      };
      mapStateToProps(state).status.must.eql([
        {
          id: 1,
          url: 'www.test.com',
          status: 'idle',
          path: '1.192.168.1.2',
          path:'src/happy',
          resources: []
        }
      ]);
      mapStateToProps(state).history.must.eql(['abc', 'defgh'] );
    });
  });
});
