import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./eventSlice";
import { volunterSlice } from "./volunteerSlice";

export default configureStore({
  reducer: {
    event: eventSlice.reducer,
    volunteer: volunterSlice.reducer,
  },
});
