export interface ProfileType {
    id?: string
    name: string
    mail: string
    role: string
    status: string
    img?: string
    type: string
}

export interface UserSignUp{
    mail: string
    password: string
}