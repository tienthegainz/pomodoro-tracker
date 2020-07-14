import React, { useState } from "react";
import NavBar from "./navBar";
import Calendar from "../calendar";
import { Layout } from 'antd';

const { Content } = Layout;

const Home = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <NavBar />
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Calendar />
            </Content>
        </Layout>
    );
}

export default Home;