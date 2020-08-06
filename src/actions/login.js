export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOAD_LOGIN = "LOAD_LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER_PENDING = "USER_PENDING";
export const LOAD_USER = "LOAD_USER";
export const USER_ERROR = "USER_ERROR";
export const LOGOUT = "LOGOUT";
export const CHECK_LOGIN = "CHECK_LOGIN";

const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const loginPending = (credential) => {
  return action(LOGIN_PENDING, credential);
};

export const loadLogin = (username) => {
  return action(LOAD_LOGIN, { username });
};

export const loginError = (error) => {
  return action(LOGIN_ERROR, error);
};

export const userPending = () => {
  return action(USER_PENDING);
};

export const loadUser = (username) => {
  return action(LOAD_USER, { username });
};

export const userError = (error) => {
  return action(USER_ERROR, error);
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const checkLogin = () => {
  return {
    type: CHECK_LOGIN,
  };
};
