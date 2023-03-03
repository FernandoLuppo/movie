export interface IUser {
    name: string
    _id: string
}

//  fazer um objeto para o login e o registro

export interface IRegister {
    name: string
    email: string
    password: string
}

export interface ILogin {
    email: string
    password: string
}