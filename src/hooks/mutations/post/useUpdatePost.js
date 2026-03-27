import { useMutation, useQueryClient } from "@tanstack/react-query";
import postService from "../../../services/postService"
import { useInvalidatePosts } from "./useInvalidatePosts";

const useUpdatePost = () => {
    const invalidatePosts = useInvalidatePosts();

    return useMutation({
        mutationFn: postService.updatePost,
        onSuccess: invalidatePosts
    })

}

export default useUpdatePost;

