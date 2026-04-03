import authApi from "../api/authApi";
import { httpRequest } from "../api/httpRequest"

const authService = {

    async login(user, pass) {
        try {
            const res = await httpRequest.post("login", { user, pass });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },

    logout() {
        authApi.deleteToken();
    }
}
export default authService;