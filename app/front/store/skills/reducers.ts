import { Action, handleActions } from 'redux-actions'

import Skill from 'model/Skill'
import EntityLoadState, { initialState } from 'store/common/api/EntityLoadState'
import { createReducers } from 'store/common/api/reducers'

import actions, { commonActionTypes } from './actions'

const commonReducers = createReducers<Skill>(commonActionTypes)

export interface SkillsState extends EntityLoadState<Skill> {
}

export default handleActions(
    {
        ...commonReducers,
    } as any,
    {
        ...initialState,
    },
)
