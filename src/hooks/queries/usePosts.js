import { useQuery } from "@tanstack/react-query";
import postService from "../../services/postService"
import { postKeys } from "../../config/queryKeys/postKeys";

export const usePosts = () => {
    return useQuery({
        queryKey: postKeys.all,
        queryFn: postService.getPosts,
    });
}
