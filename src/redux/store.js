import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice';

// Function to load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading state from localStorage:", err);
        return undefined;
    }
};

// Function to save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.error("Error saving state to localStorage:", err);
    }
};

// Load persisted state from localStorage

//this is use for persist
const persistedState = loadState();

const store = configureStore({
    reducer: {
        auth: authReducer // Use the correct reducer
    },
    preloadedState: persistedState // Load the state from localStorage if available
});

// Subscribe to store changes and save state to localStorage
store.subscribe(() => {
    const state = store.getState();
    saveState({
        auth: state.auth // Save the entire auth state to localStorage
    });
});

export default store;
