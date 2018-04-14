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
                <Row gutter={8}>
                    <Col md={4} xs={12}>
                        <Card cover={
                            <img alt="avatar" src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                        }>
                            <h3>{profile.name}</h3>
                            <p>{profile.additionalContact}</p>
                            <p>Номер телефона: {profile.phone} </p>
                            <p>e-mail: {profile.email}</p>
                        </Card>
                    </Col>
                    <Col xs={10}>
                        <Card title={'Полученные ачивки'}>
                          Ачивки
                        </Card>
                    </Col>
                    <Col xs={10}>
                        <Card title={'Матрица компетенций'}>
                            компетенции
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Container(UserComponent)