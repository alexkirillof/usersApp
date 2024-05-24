import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <div className={styles.header}>
      <div
        className={styles.menuItem}
      >
        <NavLink to={'/'}>Все сотрудники</NavLink>
        <NavLink to={'/users/user/new'}>Добавить сотрудника</NavLink>
      </div>
    </div>
  )
}

export default Header
