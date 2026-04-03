import axios from "axios";
import { httpRequest } from "../api/httpRequest";

const productService = {

    async getProducts() {
        try {
            const res = await httpRequest.get("products");
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },
    async addProduct(data) {
        try {
            const res = await httpRequest.post("products", data);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async updateProduct(data) {
        try {
            const res = await httpRequest.put("products/" + data.id, data);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async deleteProduct(data) {
        try {
            const res = await httpRequest.delete("products/" + data.id);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

}
export default productService;