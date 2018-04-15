import * as React from 'react'

import { Col, Row } from 'antd'

import Breadcrumbs from 'components/common/Breadcrumbs'

import Overview from './widgets/Overview'

export default () => (
    <React.Fragment>
        <Breadcrumbs breadcrumbs={[ 'Компетенции' ]} />

        <Row gutter={16}>
            <Col lg={20} md={24}>
                <Overview />
            </Col>
            <Col lg={4} md={24}>
                <p>...</p>
            </Col>
        </Row>
    </React.Fragment>
)
