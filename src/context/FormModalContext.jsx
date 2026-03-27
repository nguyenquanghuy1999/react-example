import * as React from 'react';
import FormModal from '../components/FormModal';


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

    const modalOpen = () => setOpen(true);

    const modalClose = () => {
        setOpen(false);
    };
    console.log("--------FormModalContext-----------");


    return (
        <FormModalContext value={{
            modalOpen,
            setData
        }}
        >
            {children}
            <FormModal
                data={data}
                setData={setData}
                open={open}
                close={modalClose}
            />

        </FormModalContext>
    );
}
