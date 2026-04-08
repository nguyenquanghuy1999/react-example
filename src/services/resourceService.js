import { httpRequest } from "../api/httpRequest";

const resourceService = {

    async get(resource) {
        try {
            const res = await httpRequest.get(resource);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },
    async create(resource, payload) {
        try {
            const res = await httpRequest.post(resource, payload);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async update(resource, payload) {
        try {
            const res = await httpRequest.put(`${resource}/` + payload.id, payload);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async delete(resource, id) {
        try {
            const res = await httpRequest.delete(`${resource}/` + id);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

}
export default resourceService;