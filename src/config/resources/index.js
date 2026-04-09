import * as yup from "yup";

export const resources = {
    posts: {
        infoDialog: "title",
        columns: [
            {
                field: "id", headerName: "Id", flex: 1
            },
            {
                field: "title",
                headerName: "Title",
                flex: 1,
            },
            {
                field: "description",
                headerName: "Description",
                flex: 1,
            },
        ],
        validationSchema: yup.object({
            title: yup.string().required(),
            description: yup.string().required(),
        })

    },
    users: {
        infoDialog: "name",
        columns: [
            { field: "id", headerName: "Id", flex: 1 },
            { field: "name", headerName: "Name", flex: 1 },
            { field: "address", headerName: "Address", flex: 1 },
        ],
        validationSchema: yup.object({
            name: yup.string().required("k trống!"),
            address: yup.string().required("K để trống!")
        })
    },
    products: {
        infoDialog: "name",
        columns: [
            { field: "id", headerName: "Id", flex: 1 },
            { field: "name", headerName: "Name", flex: 1 },
            { field: "price", headerName: "Price", flex: 1 },
            { field: "company", headerName: "Company", flex: 1 },
        ],
    },

};
