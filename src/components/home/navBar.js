import React, { useState } from "react"
import { Layout, Menu } from 'antd';
import {
    PieChartOutlined,
    LogoutOutlined,
    CalendarOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import { withRouter } from "react-router-dom";

const { Sider } = Layout;

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(a) => setCollapsed(a)}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item
                    key="1"
                    icon={<CalendarOutlined />}
                    onClick={() => props.history.push("/")}
                >
                    Calendar
                    </Menu.Item>
                <Menu.Item
                    key="2"
                    icon={<ClockCircleOutlined />}
                    onClick={() => props.history.push("/pomodoro")}
                >
                    Pomodoro
                </Menu.Item>
                <Menu.Item
                    key="3"
                    icon={<PieChartOutlined />}
                    onClick={() => props.history.push("/plot")}
                >
                    Plot
                </Menu.Item>
                <Menu.Item
                    key="4"
                    icon={<LogoutOutlined />}
                >
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default withRouter(NavBar);