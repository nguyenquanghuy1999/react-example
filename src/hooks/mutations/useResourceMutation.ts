import { useMutation, useQueryClient } from "@tanstack/react-query";
import resourceService from "@/services/resourceService";

const useResourceMutation = (resource: string) => {

    const queryClient = useQueryClient();

    const invalidateQueries = () => {
        queryClient.invalidateQueries({ queryKey: [resource] })
    };

    const createResourceMutation = useMutation({
        mutationFn: (payload: Record<string, any>) => resourceService.create(resource, payload),
        onSuccess: invalidateQueries
    })

    const updateResourceMutation = useMutation({
        mutationFn: (payload: Record<string, any>) => resourceService.update(resource, payload),
        onSuccess: invalidateQueries
    })

    const deleteResourceMutation = useMutation({
        mutationFn: (id: string | number) => resourceService.delete(resource, id),
        onSuccess: invalidateQueries
    })

    return {
        createResourceMutation,
        updateResourceMutation,
        deleteResourceMutation
    };
}
export default useResourceMutation;