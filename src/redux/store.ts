import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../redux/slices/filteredSlices";


export const store = configureStore({
  reducer: {
    filteredData: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
