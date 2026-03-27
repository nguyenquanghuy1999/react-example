import { useMutation, useQueryClient } from "@tanstack/react-query";
import postService from "../../../services/postService"
import { useInvalidatePosts } from "./useInvalidatePosts";

const useDeletePost = () => {
    const invalidatePosts = useInvalidatePosts();

    return useMutation({
        mutationFn: postService.deletePost,
        onSuccess: invalidatePosts
    })

}

export default useDeletePost;