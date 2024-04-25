interface SessionUser {
  name: string;
  email: string;
  avatarUrl: string;
}

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("refreshToken");
};

export const setSessionUser = (sessionUser: SessionUser) => {
  localStorage.setItem("sessionUser", JSON.stringify(sessionUser));
};

export const getSessionUser = (): SessionUser | null => {
  const data = localStorage.getItem("sessionUser");
  return data ? JSON.parse(data) : null;
};
