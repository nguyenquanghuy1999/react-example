import axios from "axios";
import { httpRequest } from "../api/httpRequest";

const postService = {

    async getUsers() {
        try {
            const res = await httpRequest.get("users");
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },
    async addUser(data) {
        try {
            const res = await httpRequest.User("users", data);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async updateUser(data) {
        try {
            const res = await httpRequest.put("users/" + data.id, data);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async deleteUser(data) {
        try {
            const res = await httpRequest.delete("users/" + data.id);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

}
export default postService;