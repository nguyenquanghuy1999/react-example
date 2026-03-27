import { useQuery } from "@tanstack/react-query";
import { userKeys } from "../../config/queryKeys/userKeys";

export const useUsers = () => {
    return useQuery({
        queryKey: userKeys.all,
        queryFn: userService.getUsers,
    });
}
