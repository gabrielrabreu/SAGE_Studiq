export interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

const localStorageUtils = {
  setAccessToken: (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  },

  getAccessToken: (): string | null => {
    return localStorage.getItem("accessToken");
  },

  setUser: (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
  },

  getUser: (): User | null => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  },

  removeAll: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  },
};

export default localStorageUtils;
