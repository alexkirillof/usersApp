import { UserProps } from './user.props.ts'
import styles from './user.module.scss'
import { useNavigate } from 'react-router-dom'
import { Edit } from '../Icons/Edit.tsx'
import { Remove } from '../Icons/Remove.tsx'
import { useAppDispatch } from '../../hooks/index.ts'
import {deleteUser} from "../../store/actions/removeUser.ts";



export const User = ({ user }: UserProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <li className={styles.listWpapper}>
      <div className={styles.editBlock}>
        <div
          className={styles.edit}
          onClick={() => navigate(`/users/user/${user?.id}`)}
        >
          <Edit fill='#444' />
        </div>
        <div
          className={styles.edit}
          onClick={() => {
              user?.id&&dispatch(deleteUser(user?.id))
          }}
        >
          <Remove fill='#444' />
        </div>
      </div>
      <div className={styles.testimonial}>
        <strong>Имя:</strong>
        {user?.name}
      </div>
      <div className={styles.testimonial}>
        <strong>Должность:</strong>
        {user?.role}
      </div>
      <div className={styles.testimonial}>
        <strong>Телефон:</strong>
        {user?.phone}
      </div>
    </li>
  )
}
