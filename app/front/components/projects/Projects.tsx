import * as React from 'react'

import { Row, Col } from 'antd'

import {ProjectTimeline} from './widgets/Timeline'
import {ProjectSelect} from './widgets/ProjectSelect'
import Breadcrumbs from 'components/common/Breadcrumbs'
import Project from 'model/Project'
import Container from './ProjectsContainer'

interface LocalState {
    selectedProject?: Project
}

export interface Props {
    projects: Project[]
}

class Projects extends React.PureComponent<Props, LocalState> {

    state = {
        selectedProject: this.props.projects[0],
    } as LocalState

    setProject = (project: Project) => {
        this.setState({ selectedProject: project })
    }

    render() {
        const projects = this.props.projects

        return (
            <React.Fragment>
                <Breadcrumbs breadcrumbs={[ 'Проекты' ]} />

                <Row gutter={16}>
                    <Col md={8} xs={12}>
                        <ProjectSelect projects={projects} setProject={this.setProject} />
                    </Col>
                    <Col md={16} xs={12}>
                        {this.state.selectedProject &&
                            <ProjectTimeline items={ this.state.selectedProject.timelineItems }/>
                        }
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Container(Projects)
