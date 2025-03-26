import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: AppointmentItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<AppointmentItem>) => {
            state.bookItems.push(action.payload);
        },
        removeBooking: (state, action: PayloadAction<AppointmentItem>) => {
            // Correcting the filtering logic
            state.bookItems = state.bookItems.filter(obj => 
                obj.apptDate !== action.payload.apptDate || obj.dentist._id !== action.payload.dentist._id
            );
        },
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
