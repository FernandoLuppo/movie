//  Dependencies
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
//  Components
import { Home, Login, Register, Watch, RecoverPassword, NewPassword } from "../pages"
//  Contexts
import { AuthProvider, AuthRequire } from "../shared/context"

export const Routes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route path="/" element={<AuthRequire><Home /></AuthRequire>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/watch/:id" element={<AuthRequire><Watch /></AuthRequire>} />
                    <Route path="/recover-password" element={<RecoverPassword />} />
                    <Route path="/new-password/:id" element={<NewPassword />} />

                    <Route path="*" element={<AuthRequire><Home /></AuthRequire>} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    )
}