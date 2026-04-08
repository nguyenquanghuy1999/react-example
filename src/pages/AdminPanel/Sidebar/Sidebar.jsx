import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from '@mui/material/Toolbar';
import { resources } from "../../../config/resources";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from '@mui/icons-material/MoveToInbox';

import MailIcon from '@mui/icons-material/Mail';
import { capitalizeFirstLetter } from "../../../utils/string";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Sidebar({ resourceKey, setResourceKey, mobileOpen, onTransitionEnd, onClose }) {

    const navigate = useNavigate();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {Object.keys(resources).map((resource, index) => (
                    <ListItem key={resource} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                setResourceKey(resource);
                                navigate("/admin/" + resource)
                            }}
                            style={{
                                background: resource === resourceKey && "#1976d2",
                                color: resource === resourceKey && 'white'
                            }}
                        >
                            <ListItemIcon >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={capitalizeFirstLetter(resource)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div >
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={onTransitionEnd}
                onClose={onClose}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                slotProps={{
                    root: {
                        keepMounted: true, // Better open performance on mobile.
                    },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}
export default Sidebar;