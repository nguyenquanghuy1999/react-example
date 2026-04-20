import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from "@mui/icons-material/Menu";
import { capitalizeFirstLetter } from "@/utils/string";

const drawerWidth = 240;

function Header({ resourceKey, onMenuIconClick }) {

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={onMenuIconClick}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    {capitalizeFirstLetter(resourceKey)}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;