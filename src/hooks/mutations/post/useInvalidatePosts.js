import { useQueryClient } from "@tanstack/react-query";
import { postKeys } from "../../../config/queryKeys/postKeys";

export const useInvalidatePosts = () => {
    const queryClient = useQueryClient();

    return () => queryClient.invalidateQueries({ queryKey: postKeys.all });

}