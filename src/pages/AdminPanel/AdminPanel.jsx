import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { resources } from '@/config/resources';
import FormModal from './FormModal/FormModal';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import NotFound from '../NotFound';

const validResources = Object.keys(resources);

function AdminPanel() {

    const { resource } = useParams();

    if (!validResources.includes(resource) && resource) {
        return <NotFound />
    }

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const initialResource = resource || validResources[0];

    const [resourceKey, setResourceKey] = React.useState(initialResource);

    const [formData, setFormData] = React.useState({})

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleOpenForm = (data) => {
        setFormData(data)
        openModal();
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Header
                resourceKey={resourceKey}
                onMenuIconClick={handleDrawerToggle}
            />

            <Sidebar
                resourceKey={resourceKey}
                mobileOpen={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                setResourceKey={setResourceKey}
            />

            <MainContent
                resourceKey={resourceKey}
                onOpenForm={handleOpenForm}
            />

            {isModalOpen && <FormModal
                open={isModalOpen}
                onClose={closeModal}
                data={formData} />
            }
        </Box >
    );
}
export default AdminPanel;      