import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
  userData: { name: string; address: string; email: string; phone: string } | null;
}
const initialState: UserState = {
  userData: null
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<{ name: string; address: string; email: string; phone: string }>) => {
      state.userData = action.payload;
    }
  }
});
export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
