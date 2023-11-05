import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk(
  "allEvents/fetchEvents",
  async () => {
    const response = await axios.get(
      "https://assignment-22.rittikdaas.repl.co/event"
    );
    const data = await response.data.event;
    return data;
  }
);

export const postEvents = createAsyncThunk(
  "allEvents/postEvents",
  async (eventData) => {
    const response = await axios.post(
      "https://assignment-22.rittikdaas.repl.co/event",
      eventData
    );
    const data = await response.data.event;
    return data;
  }
);

export const updateEvents = createAsyncThunk(
  "allEvents/updateEvents",
  async ({ eventId, eventData }) => {
    const response = await axios.post(
      `https://assignment-22.rittikdaas.repl.co/event/${eventId}`,
      eventData
    );
    const data = await response.data.event;
    return data;
  }
);

export const deleteEvents = createAsyncThunk(
  "allEvents/deleteEvents",
  async (eventId) => {
    const response = await axios.delete(
      `https://assignment-22.rittikdaas.repl.co/event/${eventId}`
    );
    const data = await response.data.event;
    return data;
  }
);

const initialEventState = {
  allEvents: [],
  status: "idle",
  error: "",
};

export const eventSlice = createSlice({
  name: "event",
  initialState: initialEventState,
  reducers: {},
  extraReducers: {
    [fetchEvents.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allEvents = action.payload;
    },
    [fetchEvents.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [postEvents.pending]: (state, action) => {
      state.status = "pending";
    },
    [postEvents.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allEvents.push(action.payload);
    },
    [postEvents.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [updateEvents.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateEvents.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const eventIndex = state.allEvents.findIndex(
        (s) => s._id === action.payload._id
      );
      if (eventIndex !== -1) {
        state.allEvents[eventIndex] = action.payload;
      }
    },
    [updateEvents.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [deleteEvents.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteEvents.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allEvents = state.allEvents.filter(
        (s) => s._id !== action.payload._id
      );
    },
    [deleteEvents.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export default eventSlice.reducer;
