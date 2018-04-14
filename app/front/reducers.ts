import { combineReducers } from 'redux'

import usersReducer, { UsersState } from 'store/users/reducers'
import vacationsReducers, { VacationsState } from 'store/vacations/reducers'
import modalReducers, { ModalState } from 'store/modal/reducers'
import projectReducers, {ProjectsState} from './store/projects/reducers'

export interface AppState {
    users: UsersState
    vacations: VacationsState
    modal: ModalState
    projects: ProjectsState
}

export default combineReducers({
    users: usersReducer,
    vacations: vacationsReducers,
    modal: modalReducers,
    projects: projectReducers,
})
