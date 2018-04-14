import * as React from 'react'

import { Timeline } from 'antd'

export enum TimelineStatus {
    Done = 'done',
    InProgress = 'in_progress',
    Pending = 'pending',
}

export interface TimelineItem {
    title: string,
    status: TimelineStatus
}

export interface Props {
    items: TimelineItem[]
}

export class ProjectTimeline extends React.PureComponent<Props, {}> {
    render() {
        const { items } = this.props

        return (
            <React.Fragment>
                <Timeline>
                    {items.map(({title, status}) =>
                        <Timeline.Item color={getColor(status)}>{title}</Timeline.Item>)
                    }
                </Timeline>
            </React.Fragment>
        )
    }
}

const getColor = (status: TimelineStatus) => {
    switch (status) {
        case TimelineStatus.Done:
            return 'green'
        case TimelineStatus.InProgress:
            return 'yellow'
        default:
            return ''
    }
}
