import { useQuery } from "@tanstack/react-query";
import resourceService from "@/services/resourceService";

const useResourceQuery = (resource) => {
    return useQuery({
        queryKey: [resource],
        queryFn: () => resourceService.get(resource),

    })
}
export default useResourceQuery;