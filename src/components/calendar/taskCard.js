import React from "react";
import { Card, Divider, Button } from 'antd';
import { CheckCircleTwoTone, DeleteOutlined } from '@ant-design/icons';

const PomodoroCountMark = (props) => {
    const checkMark = <CheckCircleTwoTone twoToneColor="#56a32f" />;
    const number = props.number;
    return (
        <div>
            {(number > 0) ? <>{number}{" "}X{" "}{checkMark}</ > : <></ >}
            <Divider type="vertical" />
            <Button type="danger" shape="circle" icon={<DeleteOutlined />} />
        </div>
    );
}

const TaskCard = (props) => {

    return (
        <div>
            <Card
                type="inner"
                title={props.task}
                extra={< PomodoroCountMark number={props.number} />}
            >
                {props.description}
            </Card>
        </div >
    );
}

export default TaskCard;