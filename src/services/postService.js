import axios from "axios";
import { httpRequest } from "../api/httpRequest";

const postService = {

    async getPosts() {
        try {
            const res = await httpRequest.get("posts");
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },
    async addPost(data) {
        try {
            const res = await httpRequest.post("posts", data);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async updatePost(data) {
        try {
            const res = await httpRequest.put("posts/" + data.id, data);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async deletePost(data) {
        try {
            const res = await httpRequest.delete("posts/" + data.id);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

}
export default postService;