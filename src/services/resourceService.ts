import { httpRequest } from "@/api/httpRequest";

const resourceService = {

    async get(resource: string) {
        try {
            const res = await httpRequest.get(resource);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },
    async create(resource: string, payload: Record<string, any>) {
        try {
            const res = await httpRequest.post(resource, payload);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async update(resource: string, payload: Record<string, any>) {
        try {
            const res = await httpRequest.put(`${resource}/` + payload.id, payload);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

    async delete(resource: string, id: string | number) {
        try {
            const res = await httpRequest.delete(`${resource}/` + id);
            return res.data;
        } catch (error) {
            console.log(error)
        }

    },

}
export default resourceService;