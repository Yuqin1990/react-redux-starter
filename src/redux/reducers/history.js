import { handleActions } from 'redux-actions';

export const initialState = {
  list: [
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test',
    'bjstdmngbgr02/Acceptance-test'
  ]
};

export const history = handleActions({
  CHANGE_NAME: (state, action) => (initialState)
}, initialState);
