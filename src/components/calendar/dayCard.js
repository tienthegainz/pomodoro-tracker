import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import TaskCard from './taskCard'

const fake_data = require("../../fakeData/queryDays.json");

const DayCard = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        let a = fake_data.filter(t => t.date === props.date);
        setTasks(a);
    };

    return (
        <Card
            title={(props.today) ? "Today" : props.date}
            hoverable={true}
            bordered={true}
        >
            {tasks.map(t => <TaskCard task={t.name} description={t.description} number={t.number} />)}
            {/* <TaskCard task="Code React" description="Use Antd" number={5} />
            <TaskCard task="Code Python" description="Use Antd" number={4} />
            <TaskCard task="Learn Jap" description="Use Antd" number={2} />
            <TaskCard task="Code React" description="Use Antd" number={0} /> */}
        </Card>
    );
}

export default DayCard;