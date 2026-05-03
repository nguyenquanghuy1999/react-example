import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    inputTitle: "",
    inputDesc: "",
    title: "",
    isCreate: false,
    isEdit: false,
    open: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            console.log(action);
            
            state.open = true;
        },
        closeModal: (state) => {
          state.open = false;

        },
        setData: (state) => {
            return state;
        }
    }
});

export const { openModal, closeModal, setData } = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;