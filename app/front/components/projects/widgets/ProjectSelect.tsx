import * as React from 'react'

import Project from 'model/Project'

export enum TimelineStatus {
    Done,
    InProgress,
    Pending,
}

export interface Props {
    projects: Project[],
    setProject: Function
}

export class ProjectSelect extends React.PureComponent<Props, {}> {
    render() {
        const { projects, setProject } = this.props

        return (
            <React.Fragment>
                {projects.map(product =>
                    <div onClick={() => setProject(product)}>{product.title}</div>
                )}
            </React.Fragment>
        )
    }
}
