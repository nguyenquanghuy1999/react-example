import { httpRequest } from "@/api/httpRequest";
import { deleteToken } from "@/utils/token";


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
        deleteToken();
    }
}
export default authService;