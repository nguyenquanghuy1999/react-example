import { useMutation } from "@tanstack/react-query";
import useInvalidate from "../useInvalidate";
import { userKeys } from "../../../config/queryKeys/userKeys";
import userService from "../../../services/userService";

const useDeleteUser = () => {
    const invalidate = useInvalidate(userKeys.all);

    return useMutation({
        mutationFn: userService.deleteUser,
        onSuccess: invalidate
    })

}

export default useDeleteUser;