import * as React from 'react'

import { Card } from 'antd'
import { Form } from 'react-final-form'

import Breadcrumbs from 'components/common/Breadcrumbs'
import SubmitButton from 'components/common/form/SubmitButton'
import CancelButton  from 'components/common/form/CancelButton'
import TextInput from 'components/common/form/TextInput'
import TextArea from 'components/common/form/TextArea'
import FormWrapper from 'components/common/form/FormWrapper'
import ItemWrapper from 'components/common/form/ItemWrapper'
import User from 'model/User'

import Container from './ProfileFormContainer'


export interface FormFields {
    name: string
    phone: string
    additionalContact: string
    email: string
}

export interface Props {
    user: User

    submit: (values: FormFields) => void
    cancel: () => void
    validate: (values: any) => any
}

class ProfileForm extends React.PureComponent<Props, {}> {

    render() {
        const { user, submit, cancel, validate } = this.props

        const initialValues = this.initialUser(user)

        const breadcrumb = `${!!user ? 'Редактирование' : 'Создание'} раздела`

        return (
            <React.Fragment>
                <Breadcrumbs breadcrumbs={[ 'Личный кабинет', breadcrumb ]} />
                 <Card>
                    <Form
                        onSubmit={values => submit(values as FormFields)}
                        validate={validate}
                        initialValues={initialValues}
                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                            <FormWrapper handleSubmit={handleSubmit}>

                                <ItemWrapper label='Имя' tail>
                                    <TextInput name='name' placeholder='Иван' />
                                </ItemWrapper>

                                <ItemWrapper label='Телефон' tail>
                                    <TextInput name='phone' placeholder='Иван' />
                                </ItemWrapper>

                                <ItemWrapper label='e-mail' tail>
                                    <TextInput name='email' placeholder='Иван' />
                                </ItemWrapper>

                                 <ItemWrapper label='telegram' tail>
                                    <TextInput name='additionalContact' placeholder='Иван' />
                                </ItemWrapper>


                                <ItemWrapper>
                                    <SubmitButton label={!!user ? 'Сохранить' : 'Создать'} />
                                    <CancelButton label={'Отменить'} cancel={cancel} />
                                </ItemWrapper>

                            </FormWrapper>
                        )}
                    />
                </Card>
            </React.Fragment>
        )
    }

    initialUser = (user: User) => ({
        name: user.name,
        email: user.email,
        phone: user.phone,               
        additionalContact: user.additionalContact,
    } as FormFields)
}


export default Container(ProfileForm)
