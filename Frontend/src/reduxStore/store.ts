import {configureStore} from '@reduxjs/toolkit';
import RootReducer from '../reducers/ComboReducers';

export const store = configureStore({
    reducer:RootReducer
});