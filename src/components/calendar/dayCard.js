import React from "react";
import { Card } from 'antd';
import TaskCard from './taskCard'

const DayCard = (props) => {

    return (
        <Card title={props.date}>
            <TaskCard task="Code React" description="Use Antd" number={5} />
            <TaskCard task="Code Python" description="Use Antd" number={4} />
            <TaskCard task="Learn Jap" description="Use Antd" number={2} />
            <TaskCard task="Code React" description="Use Antd" number={0} />
        </Card>
    );
}

export default DayCard;