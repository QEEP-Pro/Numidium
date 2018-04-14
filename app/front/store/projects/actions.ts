import { createTypes, createActionCreators, ActionsCreators } from 'store/common/api/actions'
import { getMyId } from 'util/api/helper'
import Collection from 'model/Collection'
import rest from 'util/api/rest'
import Project from 'model/Project'
import { AppState } from 'reducers'

import { ProjectsState } from './reducers'


const ENTITY = 'projects'

export const commonActionTypes = createTypes(ENTITY)
export const commonActionCreators = createActionCreators<Project>(ENTITY, (state: AppState) => state.projects)

export interface ProjectsActions extends ActionsCreators<Project> {
}

export default {
    ...commonActionCreators,
}
