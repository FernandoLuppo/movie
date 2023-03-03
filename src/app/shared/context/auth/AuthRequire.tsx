//  Hooks
import { useContext } from "react"
//  Context
import { AuthContext } from "./AuthContext"
//  Components
import { Login } from "../../../pages"

//  If the user has already logged in at some point, release the routes, otherwise redirect to the login page
export const AuthRequire = ({ children }: { children:JSX.Element }) => {
    const auth = useContext(AuthContext)

    if(auth.user) {
        return children
    } else {
        return <Login />
    }
}