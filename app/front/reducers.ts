import { combineReducers } from 'redux'

import articlesReducers, { ArticlesState } from 'store/articles/reducers'
import booksReducers, { BooksState } from 'store/books/reducers'
import librariesReducers, { LibrariesState } from 'store/libraries/reducers'
import modalReducers, { ModalState } from 'store/modal/reducers'
import skillsReducers, { SkillsState } from 'store/skills/reducers'
import usersReducer, { UsersState } from 'store/users/reducers'
import vacationsReduser, { VacationsState } from 'store/vacations/reducers'

export interface AppState {
    libraries: LibrariesState
    books: BooksState
    articles: ArticlesState
    modal: ModalState
    users: UsersState
    vacations: VacationsState
    skills: SkillsState
}

export default combineReducers({
    libraries: librariesReducers,
    books: booksReducers,
    articles: articlesReducers,
    modal: modalReducers,
    users: usersReducer,
    vacations: vacationsReduser,
    skills: skillsReducers,
})
