import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { usePosts } from '../../hooks/queries/usePosts';
import { FormModalContext } from '../../context/FormModalContext';
import { useContext, useState } from 'react';
import DraggableDialog from '../../components/DraggableDialog';


function DataGridDemo() {

    const postsQuery = usePosts();

    const formModalContext = useContext(FormModalContext);

    const [DraggableDialogOpen, setDraggableDialogOpen] = useState(false);
    const [data, setData] = useState(null);

    const handleClickOpen = () => {
        setDraggableDialogOpen(true);
    };

    const handleClose = () => {
        setDraggableDialogOpen(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90, },
        {
            field: 'title',
            headerName: 'Title',
            flex: 1,
            // editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
            // editable: true,
        },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     flex: 1,
        //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                const handleEdit = () => {
                    console.log(params.row);
                    formModalContext.modalOpen();
                    formModalContext.setData(prev => ({
                        ...prev,
                        id: params.row.id,
                        inputTitle: params.row.title,
                        inputDesc: params.row.description,
                        isCreate: false,
                        isEdit: true
                    }))
                }

                const handleDelete = () => {
                    handleClickOpen();
                    setData({ title: params.row.title, id: params.row.id });
                }

                return (
                    <Stack direction="row" spacing={1} >
                        <IconButton
                            title='Edit'
                            color='info'
                            onClick={handleEdit}
                        >
                            <EditIcon />
                        </IconButton >
                        <IconButton
                            title='Delete'
                            color='error'
                            onClick={handleDelete}
                        >
                            <ClearIcon />
                        </IconButton>
                    </Stack >
                )
            },
        },

    ];
    console.log("DataGrid");

    return (
        <Box sx={{ maxHeight: 400, width: '100%' }}>
            <DataGrid
                rows={postsQuery.data}
                columns={columns}
                loading={postsQuery.isLoading}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[3]}
                checkboxSelection
                disableRowSelectionOnClick
            />

            <DraggableDialog
                data={data}
                open={DraggableDialogOpen}
                onClose={handleClose}
            />
        </Box>
    );
}
export default DataGridDemo;
