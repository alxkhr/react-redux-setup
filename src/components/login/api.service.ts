export namespace LoginApiService {
  export function requestLogin(username: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(username), 1000);
    });
  }
  export function requestLogout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
}
