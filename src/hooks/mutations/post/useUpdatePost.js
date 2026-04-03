import { useMutation } from "@tanstack/react-query";
import { postKeys } from "../../../config/queryKeys/postKeys";
import postService from "../../../services/postService";
import useInvalidate from "../useInvalidate";

const useUpdatePost = () => {
    const invalidate = useInvalidate(postKeys.all);

    return useMutation({
        mutationFn: postService.updatePost,
        onSuccess: invalidate
    })

}

export default useUpdatePost;

