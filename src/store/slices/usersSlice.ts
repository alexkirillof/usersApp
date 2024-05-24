import { createSlice } from '@reduxjs/toolkit'
import { getUsers} from '../actions/getUsers.ts'
import { RootState } from '..'
import {getUser} from "../actions/getUser.ts";
import {deleteUser} from "../actions/removeUser.ts";
import {updateUser} from "../actions/updateUser.ts";
import {addUser} from "../actions/addUser.ts";



export interface IUser {
  id: string|undefined
  name: string
  isArchive: boolean
  role: string|undefined
  phone: string
  birthday: string
}

export const emptyUser: IUser = {
  id: '',
  name: '',
  isArchive: false,
  role: '',
  phone: '',
  birthday: ''
}

export interface IUsers {
  users: IUser[]
  filteredUsers: IUser[]
  user: IUser
  loading: boolean
  error: string
}

const initialState: IUsers = {
  users: [],
  filteredUsers: [],
  user: emptyUser,
  loading: true,
  error: ''
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterByRole: (state, { payload }) => {
      state.filteredUsers = state.users.filter(({ role }) => role === payload)
    },
    filterByisArchive: (state, { payload }) => {
      if (!payload) {
        state.filteredUsers = state.users
        return
      }
      state.filteredUsers = state.users.filter(
        ({ isArchive }) => isArchive === payload
      )
    },
    sortByName: (state) => {
      if (state.filteredUsers.length > 0) {
        state.filteredUsers.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        })
      } else {
        state.users.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        })
      }
    },
    sortByBirthday: (state) => {
      if (state.filteredUsers.length > 0) {
        state.filteredUsers.sort((a, b) => {
          const date1 = new Date(a.birthday.split('.').reverse().join('-'))
          const date2 = new Date(b.birthday.split('.').reverse().join('-'))
          if (date1 > date2) {
            return 1
          }
          if (date1 < date2) {
            return -1
          }
          return 0
        })
      } else {
        state.users.sort((a, b) => {
          const date1 = new Date(a.birthday.split('.').reverse().join('-'))
          const date2 = new Date(b.birthday.split('.').reverse().join('-'))
          if (date1 > date2) {
            return 1
          }
          if (date1 < date2) {
            return -1
          }
          return 0
        })
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false
    })
    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false
    })

    builder.addCase(getUser.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false
    })

    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((x) => x.id !== id);
      }
      state.loading = false
    })
    builder.addCase(deleteUser.rejected, (state) => {
      state.loading = false
    })

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((x) =>
          x.id == action.payload.id ? action.payload : x
      );
    })
    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(addUser.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
     state.users.push(action.payload)
      state.loading = false
    })
    builder.addCase(addUser.rejected, (state) => {
      state.loading = false
    })
  }
})
export const {
  filterByRole,
  filterByisArchive,
  sortByName,
  sortByBirthday,
} = usersSlice.actions

export const usersReducer = usersSlice.reducer
export const users = (state: RootState) => state.users
