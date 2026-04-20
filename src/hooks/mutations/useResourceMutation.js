import { useMutation, useQueryClient } from "@tanstack/react-query";
import resourceService from "@/services/resourceService";

const useResourceMutation = (resource) => {

    const queryClient = useQueryClient();

    const invalidateQueries = () => {
        queryClient.invalidateQueries({ queryKey: [resource] })
    };

    const createResourceMutation = useMutation({
        mutationFn: payload => resourceService.create(resource, payload),
        onSuccess: invalidateQueries
    })

    const updateResourceMutation = useMutation({
        mutationFn: payload => resourceService.update(resource, payload),
        onSuccess: invalidateQueries
    })

    const deleteResourceMutation = useMutation({
        mutationFn: id => resourceService.delete(resource, id),
        onSuccess: invalidateQueries
    })

    return {
        createResourceMutation,
        updateResourceMutation,
        deleteResourceMutation
    };
}
export default useResourceMutation;