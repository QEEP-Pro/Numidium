import Entity from './Entity'

export interface SkillLevel {
    id: number
    position: number
    title: string
    description: string
}

interface Skill extends Entity {
    title: string

    levels: SkillLevel[]
    children: Skill[]
}

export default Skill
