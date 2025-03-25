import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: AppointmentItem[];
}

const initialState: BookState = { bookItems: [] }

export const bookSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<AppointmentItem>) => {
            state.bookItems.push(action.payload); 
        },
        removeBooking: (state, action: PayloadAction<AppointmentItem>) => {
            const remainItems = state.bookItems.filter(obj => {
                return ((obj._id!==action.payload._id));
            });
            state.bookItems = remainItems;
        },
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;