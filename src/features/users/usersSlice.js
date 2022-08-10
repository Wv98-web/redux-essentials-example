import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'wuwei' },
  { id: '1', name: 'junting' },
  { id: '2', name: 'xiaoming' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
