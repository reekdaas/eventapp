import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVolunteers = createAsyncThunk(
  "allVolunteers/fetchVolunteers",
  async () => {
    const response = await axios.get(
      "https://assignment-22.rittikdaas.repl.co/volunteer"
    );
    const data = await response.data.volunteer;
    return data;
  }
);
export const postVolunteer = createAsyncThunk(
  "allVolunteers/postVolunteer",
  async (volunteerData) => {
    const response = await axios.post(
      "https://assignment-22.rittikdaas.repl.co/volunteer",
      volunteerData
    );
    const data = response.data.volunteer;
    return data;
  }
);

export const updateVolunteer = createAsyncThunk(
  "fetchVolunteers/updateVolunteer",
  async ({ volunterId, volunteerData }) => {
    const response = await axios.post(
      `https://assignment-22.rittikdaas.repl.co/volunteer/${volunterId}`,
      volunteerData
    );
    const data = await response.data.volunteer;
    return data;
  }
);
export const deleteVolunteer = createAsyncThunk(
  "allVolunteers/deleteVolunteer",
  async (volunterId) => {
    const response = await axios.delete(
      `https://assignment-22.rittikdaas.repl.co/volunteer/${volunterId}`
    );
    const data = await response.data.volunteer;
    return data;
  }
);

const initialVolunteerState = {
  allVolunteers: [],
  status: "idle",
  error: "",
};

export const volunterSlice = createSlice({
  name: "volunteer",
  initialState: initialVolunteerState,
  reducers: {},
  extraReducers: {
    [fetchVolunteers.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchVolunteers.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allVolunteers = action.payload;
    },
    [fetchVolunteers.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [postVolunteer.pending]: (state, action) => {
      state.status = "pending";
    },
    [postVolunteer.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allVolunteers = action.payload;
    },
    [postVolunteer.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [updateVolunteer.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateVolunteer.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const volunteerIndex = state.allVolunteers.findIndex(
        (v) => v._id === action.payload._id
      );
      if (volunteerIndex !== -1) {
        state.allVolunteers[volunteerIndex] = action.payload;
      }
    },
    [updateVolunteer.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [deleteVolunteer.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteVolunteer.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allVolunteers = state.allVolunteers.filter(
        (v) => v._id !== action.payload._id
      );
    },
    [deleteVolunteer.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export default volunterSlice.reducer;
