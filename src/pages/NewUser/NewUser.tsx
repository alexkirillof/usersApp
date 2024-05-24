import { Layout } from '../../components/Layout/Layout.tsx'
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts'
import { EditForm } from '../../components/EditForm/EditForm.tsx'
import { IUser } from '../../store/slices/usersSlice.ts'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../store/actions/addUser.ts'

export const NewUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.users.users)
  const onSubmit = (values: IUser) => {
    console.log(12, { ...values, id: (users.length + 1).toString() })
    dispatch(addUser({ ...values, id: (users.length + 1).toString() }))
    navigate('/users')
  }
  return (
    <Layout>
      <EditForm label='Новый сотрудник:' onSubmit={onSubmit} />
    </Layout>
  )
}
