import * as React from 'react'

import { Row, Col } from 'antd'

import Breadcrumbs from 'components/common/Breadcrumbs'

import Info from './widgets/Info'

export default () => (
    <React.Fragment>
        <Breadcrumbs breadcrumbs={[ 'Личный кабинет' ]} />

        <Row gutter={8}>
          <Col xs={24}>
                <Info />
          </Col>
        </Row>

    </React.Fragment>
)
