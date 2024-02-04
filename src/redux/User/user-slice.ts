import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}


interface UserState {
  user: User | null // pode ter as informações da interface User (usuário) ou pode ser nulo.
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action) => {
      state.user = action.payload;

    },

    logout: (state, action) => {
      state.user = null;
    }
  }
})

export const { login, logout } = userSlice.actions;