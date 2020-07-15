import React, { useState } from "react";
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavBar from "./navBar";
import Calendar from "../calendar";
import Pomodoro from "../pomodoro";
import Plot from "../plot";

const { Content } = Layout;

const Home = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Router>
                <NavBar />
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path="/plot">
                            <Plot />
                        </Route>
                        <Route path="/pomodoro">
                            <Pomodoro />
                        </Route>
                        <Route path="/">
                            <Calendar />
                        </Route>
                    </Switch>
                </Content>
            </Router>
        </Layout>
    );
}

export default Home;