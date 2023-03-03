import { IUser } from "../user/User"

export interface IAuthContextType {
    user: IUser | null
    login: (email: string, password: string) => void
    register: (name: string, email: string, password: string) => void
    logout: () => void
}