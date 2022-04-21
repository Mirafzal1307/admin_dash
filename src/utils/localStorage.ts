export const setToken = (): void => localStorage.setItem('token', '12444');
export const getToken = (): string | null => localStorage.getItem('token');
export const clearToken = (): void => localStorage.removeItem('token');
export const getUser = (): string | null => localStorage.getItem('user');
export const setUser = (user: string): void => localStorage.setItem('user', user);
export const logOut = (items: string[]) =>
  items.forEach((el: string) => {
    localStorage.removeItem(el);
  });
