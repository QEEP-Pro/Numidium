import * as React from 'react'
import { Avatar, Card, Button, Row, Col, Icon } from 'antd'

import User from 'model/User'

import Container from './InfoContainer'

export interface Props {
    profile: User
}

export class UserComponent extends React.PureComponent<Props, {}> {

    render() {
        const { profile } = this.props

        return (
            <React.Fragment>
                <Card title={profile.name}>
                    <Row  type="flex" justify="space-between" gutter={8}>
                        <Col xs={2}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" icon="user" />
                        </Col>
                        <Col xs={22}>
                            <p>{profile.additionalContact} <a><Icon type="edit" /></a></p>
                            <p>Номер телефона: {profile.phone} <a><Icon type="edit" /></a></p>
                            <p>e-mail: {profile.email} <a><Icon type="edit" /></a></p>
                        </Col>
                        <Col xs={24}>
                            <Card title={'Полученные ачивки'}>
                               Ачивки
                            </Card>
                        </Col>
                        <Col xs={24}>
                            <Card title={'Матрица компетенций'}>
                               компетенции
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        )
    }
}

export default Container(UserComponent)