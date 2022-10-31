import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  id: number
  projectName: string;
  description: string;
  isCreated: boolean;
  isApproved: boolean;
  isPublished: boolean;
}

const initialState: ProjectState[] = [
  {
    id: 1,
    projectName: "Green forests of Atlantico",
    description: "Description of Green forests",
    isCreated: false,
    isApproved: false,
    isPublished: false,
  },
  {
    id: 2,
    projectName: "Green seagrass of Bahamas",
    description: "Description of Green seagrass",
    isCreated: false,
    isApproved: false,
    isPublished: false,
  },
  {
    id: 3,
    projectName: "Reforestation of Brazil",
    description: "Description of Reforestation",
    isCreated: false,
    isApproved: false,
    isPublished: false,
  },
  {
    id: 4,
    projectName: "Blue ocean of Atlantico",
    description: "Description of Blue Ocean",
    isCreated: false,
    isApproved: false,
    isPublished: false,
  },
  {
    id: 5,
    projectName: "Blue seagrass of Bahamas",
    description: "Description of Blue seagrass",
    isCreated: false,
    isApproved: false,
    isPublished: false,
  },
];



export const projectStatusSlice = createSlice({
  name: "projectStatus",
  initialState,
  reducers: {
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

export const { created, approved, published } = projectStatusSlice.actions;

export default projectStatusSlice.reducer;
