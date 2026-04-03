import { useMutation } from "@tanstack/react-query";
import postService from "../../../services/postService"
import { postKeys } from "../../../config/queryKeys/postKeys";
import useInvalidate from "../useInvalidate";

const useDeletePost = () => {
    const invalidate = useInvalidate(postKeys.all);

    return useMutation({
        mutationFn: postService.deletePost,
        onSuccess: invalidate
    })

}

export default useDeletePost;