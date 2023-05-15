import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitPage = {
  link: string;
  isOpenNav: boolean;
};

const initialState: InitPage = {
  link: '/',
  isOpenNav: false,
};

export const navLink = createSlice({
  name: 'navLink',
  initialState,
  reducers: {
    onClickLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },

    onClickNav: (state, action: PayloadAction<boolean>) => {
      state.isOpenNav = action.payload;
    },

    closeNav: (state, action: PayloadAction<boolean>) => {
      state.isOpenNav = action.payload;
    },
  },
});

export const { onClickLink, onClickNav, closeNav } = navLink.actions;

export default navLink.reducer;
