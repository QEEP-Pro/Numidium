import * as React from 'react'

import { Col, Row } from 'antd'

import Breadcrumbs from 'components/common/Breadcrumbs'

export default () => (
    <React.Fragment>
        <Breadcrumbs breadcrumbs={[ 'Компетенции' ]} />

        <Row gutter={16}>
            <Col lg={16} md={24}>
                <p>...</p>
            </Col>
            <Col lg={8} md={24}>
                <p>...</p>
            </Col>
        </Row>
    </React.Fragment>
)
