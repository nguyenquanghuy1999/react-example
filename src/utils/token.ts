let token: string | null = null;

export const getToken = () => {
    return token;
};
export const setToken = (newToken: string) => {
    token = newToken;
};
export const deleteToken = () => {
    token = null;
};

