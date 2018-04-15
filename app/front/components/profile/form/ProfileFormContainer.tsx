import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'

import { AppState } from 'reducers'
import Loader from 'components/common/Loader'
import User, { Owner } from 'model/User'
import usersActions, { UsersActions } from 'store/users/actions'

import { Props as ComponentProps, FormFields } from './ProfileForm'


interface Props {
    id: number

    loading?: boolean
    error?: boolean

    saveLoading?: boolean
    saveError?: boolean

    user?: User

    usersActions?: UsersActions

    goBack: () => void
}

export default function (Form: React.ComponentClass<ComponentProps>) {

    type ConatinerProps = Props

    @(connect(mapStateToProps, mapDispatchToProps) as any)
    class Wrapped extends React.Component<ConatinerProps, {}> {

        render() {
            const {
                id, user, loading, error, saveLoading, saveError,
            } = this.props

            return (
                <Loader
                    loading={loading || (!!id && !user) || saveLoading}
                    error={error || saveError}
                >
                    {!!user &&
                        <Form
                            user={user}
                            submit={this.submit}
                            cancel={this.cancel}
                            validate={this.validate}
                        />
                    }
                </Loader>
            )
        }

        submit = (values: FormFields) => {
            const { usersActions } = this.props

            const usr = {
                id: this.props.id,
                name: values.name,
                email: values.email,
                phone: values.phone,
                additionalContact: values.additionalContact,
                
            } as User

            if (!!usersActions && !!usersActions.put)
                usersActions.put(usr)
                    .then(() => this.props.goBack())
        }

        cancel = () => this.props.goBack()

        validate = (values: FormFields) => {
            const errors = {} as any

        }

        componentDidMount() {
            const {
                id, user,
                usersActions,
            } = this.props

            if (id && !user && !!usersActions && !!usersActions.get)
                usersActions.get(id)
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState, ownProps: Props) => ({
    user: state.users.entities.find(v => v.id === ownProps.id),

    saveLoading: !!state.users.put.loading,
    saveError: !!state.users.put.error,

    loading: !!state.users.get.loading,
    error: !!state.users.get.error,
})


const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    usersActions: bindActionCreators(usersActions, dispatch),
})
