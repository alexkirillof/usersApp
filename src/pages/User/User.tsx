import { Layout } from '../../components/Layout/Layout.tsx'

import { useAppDispatch, useAppSelector } from '../../hooks/index.ts'

import { useNavigate, useParams } from 'react-router-dom'
import { useLayoutEffect } from 'react'

import { EditForm } from '../../components/EditForm/EditForm.tsx'
import { IUser } from '../../store/slices/usersSlice.ts'
import { getUser } from '../../store/actions/getUser.ts'
import { updateUser } from '../../store/actions/updateUser.ts'
import { getUsers } from '../../store/actions/getUsers.ts'

export const User = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.users.user)
  const params = useParams()

  useLayoutEffect(() => {
    if (params.userId) {
      dispatch(getUser(params.userId))
    }
  }, [])

  const onSubmit = (values: IUser) => {
    dispatch(updateUser({ ...values, id: params.userId }))
    navigate('/users')
    dispatch(getUsers())
  }

  return (
    <Layout>
      <EditForm
        label='Форма редактирования данных сотрудника:'
        user={user}
        onSubmit={onSubmit}
      />
    </Layout>
  )
}
