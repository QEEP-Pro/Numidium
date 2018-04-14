import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'reducers'

import {Props as ComponentProps} from './Projects'
import {TimelineStatus} from './widgets/Timeline'


export default function (Projects: React.ComponentClass<ComponentProps>) {

    @(connect(mapStateToProps) as any)
    class Wrapped extends React.Component<{}, {}> {

        render() {
            return <Projects projects={[
                {
                    title: 'QEEP-Shop',
                    timeline: [
                        {title: 'Сделать пункт меню', status: TimelineStatus.Done},
                        {title: 'Сделать таймлайн', status: TimelineStatus.InProgress}],
                },
                {
                    title: 'QEEP-mobile',
                    timeline: [
                        {title: 'Ничего не делать', status: TimelineStatus.Done},
                        {title: 'Ничего не делать', status: TimelineStatus.InProgress}],
                }]} />
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState) => ({
})
