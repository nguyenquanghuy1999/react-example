import * as React from 'react';

type FormModalContextProps = {
    openModal: () => void,
    setData: React.Dispatch<React.SetStateAction<{
        id: null;
        inputTitle: string;
        inputDesc: string;
        title: string;
        isCreate: boolean;
        isEdit: boolean;
    }>>

}

export const FormModalContext = React.createContext<FormModalContextProps | null>(null);

export default function FormModalProvider({ children }: { children: React.ReactNode }) {

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
