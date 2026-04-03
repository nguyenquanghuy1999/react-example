import { useMutation } from "@tanstack/react-query";
import postService from "../../../services/postService"
import { postKeys } from "../../../config/queryKeys/postKeys";
import useInvalidate from "../useInvalidate";

const useCreatePost = () => {
    const invalidate = useInvalidate(postKeys.all);

    return useMutation({
        mutationFn: postService.addPost,
        onSuccess: invalidate
    })

}

export default useCreatePost;
