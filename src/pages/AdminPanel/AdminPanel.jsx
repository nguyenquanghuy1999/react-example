import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { resources } from '../../config/resources';
import FormModal from './FormModal/FormModal';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import { useParams } from 'react-router-dom';

function AdminPanel() {

    const { resource } = useParams();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const initialResource = resource || Object.keys(resources)[0];

    const [item, setItem] = React.useState(initialResource);

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
                item={item}
                onMenuIconClick={handleDrawerToggle}
            />

            <Sidebar
                item={item}
                mobileOpen={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                setItem={setItem}
            />

            <MainContent
                item={item}
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