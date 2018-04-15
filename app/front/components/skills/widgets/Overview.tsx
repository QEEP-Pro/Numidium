import * as React from 'react'

import { Card, Col, Row, Tree  } from 'antd'

import Skill from 'model/Skill'
import flattenArray from 'util/flattenArray'

import Container from './OverviewContainer'

export interface Props {
    skills: Skill[]
}

interface LocalState {
    currentId?: number
}

export class Overview extends React.PureComponent<Props, LocalState> {

    public state = {
        currentId: undefined,
    } as LocalState

    public render() {
        const { skills } = this.props
        const { currentId } = this.state

        const currentSkill = currentId
            ? flattenArray<Skill>(skills, (skill) => skill.children)
                .find((skill) => skill.id === currentId)
            : undefined

        return (
            <Row gutter={16}>
                <Col lg={8}>
                    <Card title="Компетенции">
                        <Tree showLine defaultExpandAll onSelect={this.onSelect}>
                            {skills.map((skill) => this.renderNode(skill))}
                        </Tree>
                    </Card>
                </Col>
                <Col lg={16}>
                    <Card>
                        <Card.Meta title="Уровни" description={!!currentSkill && currentSkill.title} />
                    </Card>
                </Col>
            </Row>
        )
    }

    public renderNode = (skill: Skill): any => !!skill.children.length
        ? <Tree.TreeNode title={skill.title} key={skill.id}>
            {skill.children.map((child) => this.renderNode(child))}
        </Tree.TreeNode>
        : <Tree.TreeNode title={skill.title} key={skill.id} />

    public onSelect = (keys: string[]) => this.setState({
        currentId: keys[0] ? parseInt(keys[0], 10) : undefined,
    })
}

export default Container(Overview)
