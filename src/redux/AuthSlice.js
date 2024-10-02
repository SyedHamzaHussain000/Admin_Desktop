// authslice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../renderer/utils/baseURL";

const initialState = {
    msg: "",
    // user: JSON.parse(localStorage.getItem("user")) || {},
    // token: localStorage.getItem("token") || "",
    user: {},
    token: "",
    loading: false,
    error: "",
    reportDetails: null,
    errorMessage:""
};

// export const loginUser = createAsyncThunk('LoginUser', async (body) => {

//     const res = await axios.post(`${baseURL}login`, body, {
//         headers: {
//             'Content-Type': "application/json",
//         }
//     });
//     console.log("results are", res.data);
//     return res.data;
// });

export const loginUser = createAsyncThunk(
    'user',
    async (config, { rejectWithValue }) => {
        try {

            
            
          const { data } = await axios.request(config);

          console.log("data",data)
          return data; // Return the login response data to the slice
        } catch (error) {
          console.log("Error during login:", error);
          return rejectWithValue(error.response?.data || "Login failed"); // Handle errors
        }
      }
)


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token") || "";
        },
        addUser: (state, action) => {
            const user = localStorage.getItem("user");
            state.user = user ? JSON.parse(user) : {};
        },
        setReportsDetail: (state, action) => {

            console.log("dispathc", action.payload)
            state.reportDetails = action.payload
        },

        setErrorMessage : (state, action) => {
            state.errorMessage = action.payload
        },
        logout: (state, action) => {
            state.token = null;
            state.user = {};
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.success) {
                    state.token = action.payload?.token;
                    state.user = action.payload?.data ;
                    localStorage.setItem('user', JSON.stringify(state.user));
                    localStorage.setItem('token', state.token);
                } else {
                    state.error = action.payload.message || "Login failed";
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { addToken, addUser, logout, setReportsDetail ,setErrorMessage} = authSlice.actions;
export default authSlice.reducer;