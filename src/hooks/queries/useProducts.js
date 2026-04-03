import { useQuery } from "@tanstack/react-query";
import productService from "../../services/productService";
import { productKeys } from "../../config/queryKeys/";

export const useProducts = () => {
    return useQuery({
        queryKey: productKeys.all,
        queryFn: productService.getProducts,
    });
}
