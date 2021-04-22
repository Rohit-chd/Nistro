export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function facebookLogin(fbToken, fbResult) {
  return {
    type: '@auth/FACEBOOK_AUTH',
    payload: {fbToken, fbResult},
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user},
  };
}
export function generateProfileSuccess(token, user) {
  return {
    type: '@auth/GENERATE_PROFILE_SUCCESS',
    payload: {token, user},
  };
}


export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signUpRequest(name,email,gender,referralCode,password,date) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name,email,gender,referralCode,password,date},
  };
}
export function signUpSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user},
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
export function completeProfileRequest(bio, sendImage, userImageList, isMenSelect,userId,token){
  return {
    type: '@auth/COMPLETE_PROFILE_REQUEST',
    payload: {bio, sendImage, userImageList, isMenSelect,userId,token},
  };
}
export function completeProfileSuccess(user){
  return {
    type: '@auth/COMPLETE_PROFILE_SUCCESS',
    payload: {user},
  };
}
export function completeProfileFailure(){
  return {
    type: '@auth/COMPLETE_PROFILE_FAILURE',
  };
}
export function generateUserProfileRequest(token,userData,userPlaylist) {
  return {
    type: '@auth/GENERATE_PROFILE_REQUEST',
    payload: {token,userData,userPlaylist},
  };
}
export function generateUserProfileSuccess(user) {
  return {
    type: '@auth/GENERATE_PROFILE_SUCCESS',
    payload: {token,userData,userPlaylist},
  };
}
export function generateUserProfileFailure() {
  return {
    type: '@auth/GENERATE_PROFILE_FAILURE',
  };
}