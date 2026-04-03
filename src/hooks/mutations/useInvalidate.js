import { useQueryClient } from "@tanstack/react-query";

const useInvalidate = (queryKey) => {
    const queryClient = useQueryClient();

    return () => queryClient.invalidateQueries({ queryKey: queryKey });

}
export default useInvalidate;