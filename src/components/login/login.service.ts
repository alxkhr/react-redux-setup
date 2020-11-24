const USER_KEY = 'user';

export namespace LoginService {
  export function isLoggedIn(): boolean {
    return localStorage.getItem(USER_KEY) !== null;
  }

  export function login(username: string) {
    localStorage.setItem(USER_KEY, username);
  }
}
