import { AppState } from 'reducers'
import { ActionsCreators, createActionCreators, createTypes } from 'store/common/api/actions'

import Skill from 'model/Skill'
import rest from 'util/api/rest'

import { SkillsState } from './reducers'

const ENTITY = 'skills'

export const commonActionTypes = createTypes(ENTITY)
export const commonActionCreators = createActionCreators<Skill>(ENTITY, (state: AppState) => state.skills)

export interface SkillsActions extends ActionsCreators<Skill> {
}

export default {
    ...commonActionCreators,
}
