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

export interface DocType{
    id: string
    doc_name: string
    path_name: string
    type: string
    created_at: string
}