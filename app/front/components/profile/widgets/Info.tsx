import * as React from 'react'
import { Avatar, Card, Button, Row, Col, Icon } from 'antd'

import { Link } from 'react-router-dom'

import User from 'model/User'

import ProfileForm from 'components/profile/form/ProfileForm'

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
                    <Col md={6} xs={12}>
                        <Card cover={<img alt="avatar" src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                              actions={[<Link to={`/profile/edit/${profile.id}`}>Редактировать</Link>]}
                        >
                            <h3>{profile.name}</h3>
                            <p>{profile.additionalContact}</p>
                            <p>Номер телефона: {profile.phone} </p>
                            <p>e-mail: {profile.email}</p>
                        </Card>
                    </Col>
                    <Col md={9} xs={10}>
                        <Card title={'Полученные ачивки'}>
                          Ачивки
                        </Card>
                    </Col>
                    <Col md={9} xs={10}>
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