import { DetailedHTMLProps, HTMLAttributes } from 'react'
import {IUser} from "../../store/slices/usersSlice.ts";


export interface UsersListProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > {
    users: IUser[]
}