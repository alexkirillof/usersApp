import styles from './editForm.module.scss'
import {Formik, Field, ErrorMessage} from 'formik'
import { emptyUser, IUser } from '../../store/slices/usersSlice.ts'
import { post, Posts } from '../../data/Posts.ts'
import { generateRole } from '../../utils'
import {formShema} from "../../utils/validationShema.ts";
import MaskedInput from 'react-text-mask'
import {birthdayMask, phoneNumberMask} from "../../utils/masks.ts";


interface IEditForm {
  user?: IUser
  label?: string
  onSubmit: (values: IUser) => void
}

export const EditForm: React.FC<IEditForm> = ({ user, label, onSubmit }) => {
  return (
    <div className={styles.EditForm}>
      <h3> {label}</h3>
      <Formik initialValues={emptyUser} onSubmit={onSubmit} validationSchema={formShema}>
        {(props) => {
          const { values, handleChange, handleBlur, handleSubmit } = props
          return (
              <form onSubmit={handleSubmit}>
                  <div className={styles.inputWrap}>
                      <Field
                          name='name'
                          type='text'
                          placeholder={user?.name ?? 'Имя сотрудника'}
                          className={styles.input}
                          handleChange={handleChange}
                          onBlur={handleBlur}
                      />
                      <ErrorMessage name='name' component='div' className={styles.error}/>
                  </div>

                  <div className={styles.inputWrap}>
                      <Field
                          name='phone'
                          type='text'
                          placeholder={user?.phone ?? 'Телефон '}
                          render={({ field }) => (
                              <MaskedInput
                                  {...field}
                                  mask={phoneNumberMask}
                                  className={styles.input}
                                  id="phone"
                                  placeholder="Телефон "
                                  type="text"
                              />
                          )}
                      />
                      <ErrorMessage name='phone' component='div' className={styles.error}/>
                  </div>
                  <div className={styles.inputWrap}>
                      <Field
                          name='birthday'
                          type='text'
                          placeholder={user?.birthday ?? 'Дата рождения '}
                          render={({ field }) => (
                              <MaskedInput
                                  {...field}
                                  mask={birthdayMask}
                                  className={styles.input}
                                  id="birthday"
                                  placeholder="Дата рождения "
                                  type="text"
                              />
                          )}
                      />
                      <ErrorMessage name='birthday' component='div' className={styles.error}/>
                  </div>
                  <div className={styles.inputWrap}>
                      <select
                          className={styles.input}
                          name='role'
                          value={values.role}
                          onChange={handleChange}
                          style={{display: 'block'}}
                      >
                          {[{id: 0, post: ''}, ...Posts].map((post: post) => (
                              <option key={post.id} value={generateRole(post.post)}>
                                  {post.post}
                              </option>
                          ))}
                      </select>
                      <ErrorMessage name='role' component='div' className={styles.error}/>
                      </div>
                      <div className={styles.checkboxWrap}>
                          <Field
                              className={styles.checkbox}
                              name='isArchive'
                              type='checkbox'
                              handleChange={handleChange}
                              onBlur={handleBlur}
                              label='В архиве'
                              checked={values.isArchive}
                          />
                          <p>в архиве</p>
                      </div>

                      <button type='submit' className={styles.btn}>
                          Сохранить
                      </button>
              </form>
        )
        }}
        </Formik>
    </div>
  )
}
