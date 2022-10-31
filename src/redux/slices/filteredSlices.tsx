import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  id?: number;
  projectName?: string;
  description?: string;
  isCreated?: boolean;
  isApproved?: boolean;
  isPublished?: boolean;
}

const initialState: ProjectState[] = [];

export const filteredSlices = createSlice({
  name: "filteredData",
  initialState,
  reducers: {
    searchResult: (state: any, action) => {
      return (state = action.payload);
    },
    created: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].isCreated = action.payload.isCreated;
    },
    approved: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].isApproved = action.payload.isApproved;
    },
    published: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].isPublished = action.payload.isPublished;
    },
  },
});

export const { searchResult, created, approved, published } = filteredSlices.actions;

export default filteredSlices.reducer;
