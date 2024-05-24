import { Navigate, Route, Routes } from 'react-router-dom'
import { Users } from '../pages/Users/Users'
import { User } from '../pages/User/User'
import { NewUser } from '../pages/NewUser/NewUser.tsx'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/users'} />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/user/:userId' element={<User />} />
      <Route path='/users/user/new' element={<NewUser />} />
    </Routes>
  )
}
