import { generateRole } from '../../utils'
import styles from './filterForm.module.scss'
import { useDispatch } from 'react-redux'
import {
  filterByisArchive,
  filterByRole,
  IUser,
  sortByBirthday,
  sortByName
} from '../../store/slices/usersSlice'
import ReactSelect from 'react-select'

import { useState } from 'react'
import Switcher from '../Ui/Switcher/Switcher'
import { post, Posts } from '../../data/Posts.ts'
interface IFilterForm {
  users: IUser[]
}
export const FilterForm: React.FC<IFilterForm> = ({ users }) => {
  const [isArchive, setIsArchive] = useState<boolean>(true)
  const dispatch = useDispatch()
  const handleSwitch = () => {
    setIsArchive(!isArchive)
    dispatch(filterByisArchive(isArchive))
  }

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.select}>
        <ReactSelect
          options={[{ id: 0, post: '' }, ...Posts]}
          getOptionLabel={(w: post) => w.post}
          getOptionValue={(g) => g.id.toString()}
          onChange={(selected: post | null) => {
            selected && dispatch(filterByRole(generateRole(selected.post)))
          }}
          placeholder='Фильтр по должности'
        />
      </div>

      <Switcher value={!isArchive} onClick={handleSwitch} label='в архиве' />
      <button className={styles.button} onClick={() => dispatch(sortByName())}>
        сортировать по имени
      </button>
      <button
        className={styles.button}
        onClick={() => users.length > 0 && dispatch(sortByBirthday())}
      >
        сортировать по дате рождения
      </button>
    </div>
  )
}
