import { useQuery } from "@tanstack/react-query";
import { userKeys } from "../../config/queryKeys";
import userService from "../../services/userService"

export const useUsers = () => {
    return useQuery({
        queryKey: userKeys.all,
        queryFn: userService.getUsers,
    });
}
