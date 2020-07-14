import React from "react";
import { Card } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

const PomodoroCountMark = (props) => {
    const checkMark = <CheckCircleTwoTone twoToneColor="#56a32f" />;

    return (
        <div>
            {[...Array(props.number).keys()].map(i => <>{checkMark}{' '}</>)}
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