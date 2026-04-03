import { useMutation } from "@tanstack/react-query";
import { productKeys } from "../../../config/queryKeys/productKeys";
import productService from "../../../services/productService";
import useInvalidate from "../useInvalidate";

const useUpdateProduct = () => {
    const invalidate = useInvalidate(productKeys.all);

    return useMutation({
        mutationFn: productService.updateProduct,
        onSuccess: invalidate
    })

}

export default useUpdateProduct;

