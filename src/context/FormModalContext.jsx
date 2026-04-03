import * as React from 'react';



export const FormModalContext = React.createContext();

export default function FormModalProvider({ children }) {

    const [open, setOpen] = React.useState(false);

    const [data, setData] = React.useState({
        id: null,
        inputTitle: "",
        inputDesc: "",
        title: "",
        isCreate: false,
        isEdit: false
    })

    const openModal = () => setOpen(true);

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <FormModalContext value={{
            openModal,
            setData
        }}>

            {children}
{/* 
            <FormModal
                data={data}
                open={open}
                onClose={closeModal}
            /> */}

        </FormModalContext>
    );
}
