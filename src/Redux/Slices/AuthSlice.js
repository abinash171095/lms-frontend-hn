import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn')  || false,
    role: localStorage.getItem('role') || null,
    data:localStorage.getItem('data') || null,
}
const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {},

})

//export const {} = authSlice.actions;
export default authSlice.reducer;
