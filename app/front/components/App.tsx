import * as React from 'react'

import { Layout, Menu } from 'antd'
import { css } from 'emotion'
import { Route, Link, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

import ContentBlock from 'components/common/Content'
import IconWithText, { IconType } from 'components/common/IconWithText'
import ModalRoot from 'components/modal/ModalRoot'
import menu, { MenuItem, INDEX_PAGE } from 'menu'
import User from 'model/User'
import findMostSimilar from 'util/findMostSimilar'

import Dashboard from './dashboard/Dashboard'

import Vacations from './vacations/Vacations'

import Profile from './profile/Profile'
import ProfileForm from './profile/form/ProfileForm'

import Libraries from './libraries/Libraries'
import Library from './libraries/Library'
import LibraryForm from './libraries/LibraryForm'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu


interface LocalState {
    collapsed: boolean
    menuKey: string
}

export default class App extends React.PureComponent<RouteComponentProps<{}>, LocalState> {

    state = {
        collapsed: false,
        menuKey: '',
    } as LocalState

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed })
    }

    render() {
        const { menuKey, collapsed } = this.state

        return (
            <Layout className={this.s('constainer')}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className={this.s('logo')} />
                    <Menu theme='dark' selectedKeys={[ menuKey ]} mode='inline'>
                        {menu.map((item, i) => !!item.children
                            ? this.renderSubMenu(item)
                            : this.renderMenuItem(item)
                        )}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={this.s('header')} />

                    <Content className={this.s('content')}>
                        <ContentBlock>
                            <Route path='/' exact component={Dashboard} />

                            <Route path='/vacations' component={Vacations} />

                            <Route path='/profile' component={Profile} />
                            <Route path='/profile/edit/:id' render={({ match, history }) =>
                                <ProfileForm id={parseInt(match.params.id, 10)} goBack={history.goBack} />
                            } />

                            <Route path='/libs' exact component={Libraries} />
                            <Route path='/libs/form/:id?' render={({ match, history }) =>
                                <LibraryForm id={parseInt(match.params.id, 10)} goBack={history.goBack} />
                            } />
                            <Route path='/libs/show/:id' render={({ match }) =>
                                <Library id={parseInt(match.params.id, 10)} />
                            } />
                        </ContentBlock>
                    </Content>

                    <Footer className={this.s('footer')}>
                        Numidium © 2017 – {new Date().getFullYear()}
                    </Footer>
                </Layout>

                <ModalRoot />
            </Layout>
        )
    }

    renderSubMenu = (item: MenuItem) =>
        <SubMenu key={item.key} title={<IconWithText icon={item.icon} text={item.title} />}>
            {item.children && item.children.map(this.renderMenuItem)}
        </SubMenu>

    renderMenuItem = (item: MenuItem) =>
        <Menu.Item key={item.key}>
            <Link to={item.path || '/'}>
                <IconWithText icon={item.icon} text={item.title} />
            </Link>
        </Menu.Item>

    s = (className: string) => ({
        constainer: css`
            min-height: 100vh;
        `,
        logo: css`
            height: 32px;
            background: rgba(255,255,255,.2);
            margin: 16px;
        `,
        header: css`
            background: #fff;
            padding: 0;
        `,
        content: css`
            margin: 0 16px;
        `,
        footer: css`
            text-align: center;
        `,
    } as any)[className]

    componentWillReceiveProps(nextProps: RouteComponentProps<{}>) {
        const path = nextProps.location.pathname
        const currentItem = findMostSimilar(path, menu, e => e.path)
        const currentKey = currentItem ? currentItem.key : INDEX_PAGE

        this.setState({ menuKey: currentKey })
    }

    componentWillMount() {
        this.componentWillReceiveProps(this.props)
    }
}
