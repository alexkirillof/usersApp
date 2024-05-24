import styles from './usersList.module.scss'
import { IUser } from '../../store/slices/usersSlice.ts'
import { UsersListProps } from './usersList.props.ts'
import { User } from '../User/User.tsx'

export const UsersList = ({ users, ...props }: UsersListProps) => {
  return (
    <ul className={styles.listWrapper} {...props}>
      {users.map((user: IUser) => (
        <User user={user} key={user?.id} />
      ))}
    </ul>
  )
}
