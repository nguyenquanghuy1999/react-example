import { useMutation } from "@tanstack/react-query";
import { productKeys } from "../../../config/queryKeys/productKeys";
import productService from "../../../services/productService";
import useInvalidate from "../useInvalidate";

const useDeleteProduct = () => {
    const invalidate = useInvalidate(productKeys.all);

    return useMutation({
        mutationFn: productService.deleteProduct,
        onSuccess: invalidate
    })

}

export default useDeleteProduct;