export interface ProfileType {
    id?: string
    name: string
    mail: string
    role: string
    status: string
    img?: string
    type: string
    created_at?: string
}

export interface UserSignUp{
    mail: string
    password: string
}