import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface QueueItem {
  id: string;
  title: string;
  duration: number;
  status: 'pending' | 'processing' | 'canceled' | 'complete';
}

// Hint - use Redux Tookit's "createEntityAdapter" to set up store slice
// https://redux-toolkit.js.org/usage/usage-with-typescript#createentityadapter
const queueAdapter = createEntityAdapter<QueueItem>();

export const queueSlice = createSlice({
  name: 'queue',
  initialState: queueAdapter.getInitialState(),
  reducers: {
    /* Define reducers (and actions) to manage the queue */
  },
});

export const {} = queueSlice.actions;

export default queueSlice.reducer;
