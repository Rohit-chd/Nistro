import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case'@auth/UPDATE_PROFILE_REQUEST' :{
        draft.loading = true;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        draft.loading = false;
        break;
      }
      case'@auth/UPDATE_PROFILE_FAILURE' :{
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
