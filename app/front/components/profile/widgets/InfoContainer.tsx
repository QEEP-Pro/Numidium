import * as React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'

import { AppState } from 'reducers'
import usersAction, { UsersActions } from 'store/users/actions'
import Loader from 'components/common/Loader'
import User from 'model/User'

import { Props as ComponentProps } from './Info'


interface Props {
    loading?: boolean
    error?: boolean
    user?: User
}

export default function (User: React.ComponentClass<ComponentProps>) {

    type ConatinerProps = Props & UsersActions

    @(connect(mapStateToProps, { ...usersAction }) as any)
    class Wrapped extends React.Component<ConatinerProps, {}> {

        render() {
            const { loading, error, user } = this.props

            return (
                <Loader loading={loading || !user} error={error}>
                    {user && <User profile={user} />}
                </Loader>
            )
        }

        componentDidMount() {
            const { getMe, user } = this.props

            if (getMe && !user) getMe()
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState) => ({
    loading: !!state.users.get.loading,
    error: !!state.users.get.error,
    user: state.users.entities.find(u => u.id === state.users.meId),
})
