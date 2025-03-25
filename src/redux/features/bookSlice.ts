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
                return ((obj.apptDate!==action.payload.apptDate)||
                (obj.apptDate!==action.payload.apptDate)||
                (obj.apptDate!==action.payload.apptDate));
            })
            state.bookItems = remainItems;
        },
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;