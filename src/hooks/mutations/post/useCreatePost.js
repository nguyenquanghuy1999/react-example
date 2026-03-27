import { useMutation } from "@tanstack/react-query";
import postService from "../../../services/postService"
import { useInvalidatePosts } from "./useInvalidatePosts";

const useCreatePost = () => {
    const invalidatePosts = useInvalidatePosts();

    return useMutation({
        mutationFn: postService.addPost,
        onSuccess: invalidatePosts
    })

}

export default useCreatePost;
