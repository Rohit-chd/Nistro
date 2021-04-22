import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  user: null
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': 
      case '@auth/COMPLETE_PROFILE_REQUEST':
      case '@auth/FACEBOOK_AUTH':
      case'@auth/SIGN_UP_REQUEST' :{
        draft.loading = true;
        break;
      }
     
      
      case '@auth/GENERATE_PROFILE_SUCCESS': 
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.loading = false;
        draft.signed = true;
        draft.user= action.payload.user;
        break;
      }
      case '@auth/SIGN_IN_FAILURE':
      case '@auth/COMPLETE_PROFILE_FAILURE':  {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.user = null
        break;
      }
      default:
    }
  });
}
