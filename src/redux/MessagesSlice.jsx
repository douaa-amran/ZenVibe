import { createSlice } from "@reduxjs/toolkit";

const MessagesSlice = createSlice({
    name: "messages",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage } = MessagesSlice.actions;
export default MessagesSlice.reducer;