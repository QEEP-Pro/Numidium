import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'reducers'

import {Props as ComponentProps} from './Projects'
import {bindActionCreators, Dispatch} from 'redux'
import projectsActions, {ProjectsActions} from '../../store/projects/actions'
import {ModalActions} from '../../store/modal/actions'
import Vacation from '../../model/Vacation'
import User from '../../model/User'
import {VacationsActions} from '../../store/vacations/actions'
import {UsersActions} from '../../store/users/actions'
import Project from '../../model/Project'
import Loader from '../common/Loader'
import * as moment from 'moment'

interface Props {
    loading?: boolean
    error?: boolean

    projectsLoaded?: boolean

    projectsActions?: ProjectsActions

    projects?: Project[]
}

export default function (Projects: React.ComponentClass<ComponentProps>) {

    type ContainerProps = Props

    @(connect(mapStateToProps, mapDispatchToProps) as any)
    class Wrapped extends React.Component<ContainerProps, {}> {

        render() {
            const { loading, projects, error } = this.props

            return (
                <Loader loading={loading} error={error}>
                    {projects &&
                        <Projects projects={projects} />
                    }
                </Loader>
            )
        }

        componentDidMount() {
            const { projectsActions, projectsLoaded } = this.props

            if (!!projectsActions && !!projectsActions.getList && !projectsLoaded) {
                projectsActions.getList()
            }
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState) => ({
    loading: state.projects.getList.loading,
    error: state.projects.getList.error,

    projectsLoaded: !!state.projects.list,

    projects: state.projects.entities,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    projectsActions: bindActionCreators(projectsActions, dispatch),
})

