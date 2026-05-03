import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataTable from "./DataTable";
import OpenFormData from "@/types";

type MainContentProps = {
    resourceKey: string,
    onOpenForm: (data: OpenFormData) => void
}

function MainContent({ resourceKey, onOpenForm }: MainContentProps) {

    const handleClick = () => {
        onOpenForm({
            resourceKey: resourceKey,
            isCreate: true,
            isEdit: false,
        })
    };

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
        >
            <Toolbar />
            <Box sx={{ mb: 3 }}>
                <Button
                    sx={{ display: 'flex', p: 1, ml: "auto" }}
                    variant="contained"
                    startIcon={<AddCircleIcon />}
                    onClick={handleClick}
                >
                    Create
                </Button>
            </Box>
            <DataTable
                resource={resourceKey}
                onOpenForm={onOpenForm}
            />
        </Box>

    )
}
export default MainContent;