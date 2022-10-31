import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../redux/slices/projectStatusSlice";
import filterReducer from "../redux/slices/filteredSlices";



export const store = configureStore({
  reducer: {
    projectStatus: projectReducer,
    filteredData: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
