import * as React from 'react'
// import * as moment from 'moment'
import { Avatar, Card, Button, Row, Col, Icon } from 'antd'

import User from 'model/User'

import Container from './InfoContainer'

export interface Props {
    profile: User[]
}

export class UserComponent extends React.PureComponent<Props, {}> {

    render() {
        const { profile } = this.props

        return (
            <React.Fragment>
                <Card title={'UserName'}>
                    <Row  type="flex" justify="space-between" gutter={8}>
                        <Col xs={2}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" icon="user" />
                        </Col>
                        <Col xs={22}>
                            <p>Номер телефона: {'телефон'} <Button shape="circle" size="small" icon="edit" /></p>
                            <p>e-mail: {'mail'} <Button shape="circle" size="small" icon="edit" /></p>
                            <p>{'соцсеть'}: {'t.me/fckrkn'} <Button shape="circle" size="small" icon="edit" /></p>
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