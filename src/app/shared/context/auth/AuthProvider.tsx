//  Dependencies
import { Api } from "../../services"
import { useNavigate } from "react-router-dom"
//  Hooks
import { useState, useEffect } from "react"
//  Context
import { AuthContext } from "./AuthContext"
//  Types
import { IUser } from "../../types"

//  Route validator
export const AuthProvider = ({ children }: { children:JSX.Element }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState<IUser | null>(null)

    //  Checks if the user has already logged in through localStorage, if he has already done so, the routes are released
    useEffect(() => {
        const validateId = async () => {
            const storageData = localStorage.getItem("authId")
            if(storageData) {
                const response = await Api().post("/localStorage", {storageData})  
                if(response.data) setUser(response.data)
            }
        }
        validateId()
    }, [])

    //  send the user information to bank for validation and release routes
    const login = async (email: string, password: string) => {
        await Api().post("/login", { email, password })
        .then(res => {            
            setUser(res.data)
            setId(res.data._id)
            navigate("/")
        }).catch(error => {    
            let errors = error.response.data
            if(errors) errors.forEach((error:string) => alert(error))
        })
    }

    //  Register a new user
    const register = async (name: string, email: string, password: string) => {
        await Api().post("/register", { name, email, password })
        .then(() => navigate("/login"))
        .catch(error => {          
            let errors = error.response.data
            if(errors) errors.forEach((error:string) => alert(error)) 
        })
    }

    //  Do logout
    const logout = async () => {
        setUser(null)
        setId("")
    }

    //  Define user information in localStorage to release routes
    const setId = (_id: string) => {
        localStorage.setItem("authId", _id)
    }

    return (
        <AuthContext.Provider value={{user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}