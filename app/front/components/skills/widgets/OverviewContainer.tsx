import * as React from 'react'
import { connect } from 'react-redux'

import Loader from 'components/common/Loader'
import Skill from 'model/Skill'
import { AppState } from 'reducers'
import skillsAction, { SkillsActions } from 'store/skills/actions'

import { Props as ComponentProps } from './Overview'

interface Props {
    loading?: boolean
    error?: boolean
    loaded?: boolean
    skills?: Skill[]
}

export default function(Overview: React.ComponentClass<ComponentProps>) {

    type ConatinerProps = Props & SkillsActions

    @(connect(mapStateToProps, { ...skillsAction }) as any)
    class Wrapped extends React.Component<ConatinerProps, {}> {

        public render() {
            const { loading, loaded, error, skills } = this.props

            return (
                <Loader loading={loading || !skills} error={error}>
                    {loaded && skills &&
                        <Overview skills={skills.sort((a, b) => a.title > b.title ? 1 : -1)}
                    />}
                </Loader>
            )
        }

        public componentDidMount() {
            const { getList, loaded } = this.props

            if (getList && !loaded) { getList() }
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState) => ({
    loading: !!state.skills.getList.loading,
    error: !!state.skills.getList.error,
    loaded: !!state.skills.list,
    skills: state.skills.entities,
})
