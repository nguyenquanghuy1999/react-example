import { useCreatePost, useDeletePost, useUpdatePost } from "../../hooks/mutations/post";
import { useCreateProduct, useUpdateProduct, useDeleteProduct } from "../../hooks/mutations/product";
import { useCreateUser, useDeleteUser, useUpdateUser } from "../../hooks/mutations/user";
import { usePosts, useProducts, useUsers } from "../../hooks/queries";

export const resources = {
    posts: {
        nameDialog: "title",
        columns: [
            { field: "id", headerName: "Id", flex: 1 },
            { field: "title", headerName: "Title", flex: 1 },
            { field: "description", headerName: "Description", flex: 1 },
        ],
        get: usePosts,
        create: useCreatePost,
        update: useUpdatePost,
        delete: useDeletePost
    },
    users: {
        nameDialog: "name",
        columns: [
            { field: "id", headerName: "Id", flex: 1 },
            { field: "name", headerName: "Name", flex: 1 },
            { field: "address", headerName: "Address", flex: 1 },
        ],
        get: useUsers,
        create: useCreateUser,
        update: useUpdateUser,
        delete: useDeleteUser
    },
    products: {
        nameDialog: "name",
        columns: [
            { field: "id", headerName: "Id", flex: 1 },
            { field: "name", headerName: "Name", flex: 1 },
            { field: "price", headerName: "Price", flex: 1 },
            { field: "company", headerName: "Company", flex: 1 },
        ],
        get: useProducts,
        create: useCreateProduct,
        update: useUpdateProduct,
        delete: useDeleteProduct
    }
};
