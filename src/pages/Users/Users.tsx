import { Layout } from '../../components/Layout/Layout.tsx'
import { useLayoutEffect } from 'react'
import { getUsers } from '../../store/actions/getUsers.ts'
import { UsersList } from '../../components/UsersList/UsersList.tsx'
import { FilterForm } from '../../components/FilterForm/FilterForm.tsx'
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

export const Users = () => {
  const params = useParams()
  const loading = useAppSelector((state) => state.users.loading)
  const { users, filteredUsers } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    users.length === 0 && dispatch(getUsers())
  }, [params, users.length])
  return (
    <Layout>
      <FilterForm users={users} />
      {loading ? (
        <Spinner animation='border' />
      ) : (
        <UsersList users={filteredUsers.length ? filteredUsers : users} />
      )}
    </Layout>
  )
}
