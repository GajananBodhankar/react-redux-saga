import { createSlice } from "@reduxjs/toolkit";

interface Itype {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Idata {
  data: Itype[];
  status: "Idle" | "Loading" | "Success" | "Failed";
}

const initialState: Idata = {
  data: [],
  status: "Idle",
};

const SagaSlice = createSlice({
  name: "sagaSlice",
  initialState: initialState,
  reducers: {
    success: (state, action) => {
      console.log("action", action);
      state.data = action.payload;
      state.status = "Success";
    },
    failed: (state) => {
      state.data = [];
      state.status = "Failed";
    },
    loading: (state) => {
      state.data = [];
      state.status = "Loading";
    },
  },
});

export const SagaReducer = SagaSlice.reducer;
export const { success, failed, loading } = SagaSlice.actions;
