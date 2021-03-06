import * as React from 'react'

import { Form } from 'antd'

interface Props {
    handleSubmit?: () => void
    children?: any
}

export default (props: Props) =>
    <Form onSubmit={(e: any) => {
        e.preventDefault()
        if (props.handleSubmit) { props.handleSubmit() }
    }}>
        {props.children}
    </Form>
