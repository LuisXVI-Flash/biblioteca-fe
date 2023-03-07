export interface User {
    id: number,
    user: string,
    password: string,
    nombres: string,
    apellidos: string,
    correo: string,
    rol: number,
    activo: number
}

export interface listaUsers {
    usuario: User[],
    total: number
}