import Entity from './Entity'

export interface Owner extends Entity {
}

export default interface User extends Owner {
    email: string
    name: string
    phone: string
    additionalContact: string
    active: boolean
}
