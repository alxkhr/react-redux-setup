const USER_KEY = 'user';

export namespace LoginPersistenceService {
  export function getUser() {
    return localStorage.getItem(USER_KEY);
  }

  export function login(username: string) {
    localStorage.setItem(USER_KEY, username);
  }

  export function logout() {
    localStorage.removeItem(USER_KEY);
  }
}
