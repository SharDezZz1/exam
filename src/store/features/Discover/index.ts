import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
interface DiscoverState {
  value: {
    title: string;
    img: string;
    description: string;
  }[];
}

// Define the initial state using that type
const initialState: DiscoverState = {
  value: [
    {
      title: 'ts',
      img: 'asd',
      description: 'asd',
    },
    {
      title: 'tsas',
      img: 'asd',
      description: 'asd',
    },
  ],
};

export const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {},
});

export const { } = discoverSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDiscover = (state: RootState) => state.discover.value;

export default discoverSlice.reducer;