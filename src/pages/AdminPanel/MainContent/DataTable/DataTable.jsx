import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import DraggableDialog from './DraggableDialog/DraggableDialog';
import { resources } from '../../../../config/resources';


function DataTable({ resource, onOpenForm }) {

    const mainResource = resources[resource];

    const resourceQuery = mainResource.get();

    const { data: resourceData, isLoading } = resourceQuery;

    const [DraggableDialogOpen, setDraggableDialogOpen] = useState(false);
    const [data, setData] = useState(null);

    const handleOpenDraggableDialog = () => {
        setDraggableDialogOpen(true);
    };

    const handleCloseDraggableDialog = () => {
        setDraggableDialogOpen(false);
    };

    const columns = [
        ...mainResource.columns,
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                const handleEdit = () => {
                    onOpenForm({
                        item: resource,
                        isEdit: true,
                        isCreate: false,
                        dataEdit: params.row,
                    })
                }

                const handleDelete = () => {
                    handleOpenDraggableDialog();
                    const nameDialog = mainResource.nameDialog;
                    setData({
                        ...params.row,
                        resource,
                        nameDialog: params.row[nameDialog]
                    });
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

            }
        }
    ];

    return (
        <Box sx={{ maxHeight: 400, width: '100%' }}>
            <DataGrid
                key={resource}
                rows={resourceData}
                columns={columns}
                loading={isLoading}
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
            {
                DraggableDialogOpen && <DraggableDialog
                    data={data}
                    open={DraggableDialogOpen}
                    onClose={handleCloseDraggableDialog}
                />
            }
        </Box>
    );
}
export default DataTable;
