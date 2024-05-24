import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IUser } from '../../store/slices/usersSlice.ts'

export interface UserProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  user: IUser
}
