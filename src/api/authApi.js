let token;

const authApi = {
    getToken() {
        return token;
    },
    setToken(newToken) {
        token = newToken;
    },
    deleteToken() {
        token = null;
    }

}
export default authApi;