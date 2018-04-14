import { handleActions, Action } from 'redux-actions'

import EntityLoadState, { initialState } from 'store/common/api/EntityLoadState'
import { createReducers } from 'store/common/api/reducers'
import Collection from 'model/Collection'
import Project from 'model/Project'

import actions, { commonActionTypes } from './actions'

const commonReducers = createReducers<Project>(commonActionTypes)

export interface ProjectsState extends EntityLoadState<Project> {
}

export default handleActions(
    {
        ...commonReducers,
    } as any,
    {
        ...initialState,
    }
)
