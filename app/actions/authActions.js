import { updateRoute } from '../helpers/routerHelper';
import { loadUserProfile } from './loadUserProfileAction';
import { debug } from '../debug/index';
import { createAction } from 'redux-actions';
import { clearStorage } from '../stores/localStorage';
import { postRequest, postActivateLinkRequest } from '../utils/api';
import { updateJWT, updateActivateToken } from '../utils/user';
import { NotificationAction } from './notificationAction';
import { loadTpos } from './loadTposAction';
import { setProgressModelState } from '../reducers/modelDialogReducer';
import _ from 'lodash';
export const userLogout = createAction('USER_LOGOUT');

export function login(credentials, navigation = undefined) {
  const request = postRequest('api_login_check', credentials);

  return dispatch => {
    dispatch(setProgressModelState(true));
    return request
      .then(res => {
        const { token, refresh_token, data } = res.data;
        if (!data.isActivated) {
          updateActivateToken(credentials._username, token);
        } else {
          updateJWT(token, refresh_token);
          dispatch(loadUserProfile(data));
          dispatch(NotificationAction());
        }

        dispatch(setProgressModelState(false));
        return token;
      })
      .catch(err => {
        dispatch(setProgressModelState(false));
        throw err;
      });
  };
}

export function logoutUser() {
  return dispatch => {
    clearStorage();
    dispatch(userLogout());
    dispatch(loadTpos());
  };
}

export function forgot_password(data, navigation = undefined) {
  return dispatch => {
    dispatch(setProgressModelState(true));
    postRequest('auth_forgotPassword_post', data)
      .then(res => {
        dispatch(setProgressModelState(false));
        updateRoute('app_passwordSent', navigation || dispatch);
      })
      .catch(err => {
        debug(err);
        dispatch(setProgressModelState(false));
        throw err;
      });
  };
}

export function sendEmail(navigation = undefined) {
  return dispatch => {
    postActivateLinkRequest('auth_sendActivationLink_post')
      .then(res => {
        // console.log(res);
      })
      .catch(err => debug(err));
  };
}

export function reset_password(data, navigation = undefined) {
  return dispatch => {
    postRequest('auth_resetPassword_post', data)
      .then(res => {
        updateRoute('app_login', navigation || dispatch);
      })
      .catch(err => debug(err));
  };
}
export function setAccessDenied(data, params, path, navigation = undefined) {
  return dispatch => {
    postRequest('public_accessDenied', data, params)
      .then(res => {
        const { statusText } = res;
        updateRoute(path, navigation || dispatch);
        // NotificationManager.success(statusText, 'Success', 5000);
      })
      .catch(error => {
        // NotificationManager.error(error.response.data.message, 'Error', 5000);
      });
  };
}
