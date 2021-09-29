import logo from './logo.png';
import './style.css';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {Fragment} from "react";
import {Link} from "react-router-dom";

function AppHeader(props) {
    const list = [
        {
            key: 1,
            icon: <MailOutlined/>,
            title: '长沙好玩'
        },
        {
            key: 2,
            icon: <AppstoreOutlined/>,
            title: '吃吃吃喝'
        },
        {
            key: 3,
            icon: <SettingOutlined/>,
            title: '烟花漂亮'
        },
        {
            key: 4,
            icon: <MailOutlined/>,
            title: '帅哥蜜女'
        },
        {
            key: 5,
            icon: <AppstoreOutlined/>,
            title: '长沙好玩'
        },
        {
            key: 6,
            icon: <MailOutlined/>,
            title: '想想想想'
        },
    ]

    function getMenuItems() {
        return list.map(it => {
            return <Menu.Item key={it.key} icon={it.icon}>
                <Link to={`/${it.key}`}>{it.title}</Link>
            </Menu.Item>
        })
    }


    return (
        <Fragment>
            <Link to='/'>
                <img src={logo} alt="logo" className="app-header-logo"/>
            </Link>
            <Menu mode="horizontal" className="app-header-menu">
                {getMenuItems()}
            </Menu>
        </Fragment>
    );
}

export default AppHeader;