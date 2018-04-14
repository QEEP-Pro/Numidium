import * as React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'

import { AppState } from 'reducers'

import { Props as ComponentProps } from './Info'


export default function (Info: React.ComponentClass<ComponentProps>) {

    
    @(connect(mapStateToProps) as any)
    class Wrapped extends React.Component<{}, {}> {

        render() {
            return <Info profile={[]} />
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState) => ({
})