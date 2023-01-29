export const tokenKey = 'x-auth_token';

class AuthService {
  static getToken = () => {
    return localStorage.getItem(tokenKey);
  };

  static setToken = (token) => {
    localStorage.setItem(tokenKey, token);
  };

  static logout = () => {
    localStorage.removeItem(tokenKey);
  };
}

export default AuthService;
