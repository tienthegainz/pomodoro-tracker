import React from "react"
import TaskUpload from "./taskUpload"
import DayCard from "./dayCard"
import { Col, Row, Divider, Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const Calendar = () => {
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = mm + '/' + dd + '/' + yyyy;

    // let dateList = [mm + '/' + String((+dd) - 1) + '/' + yyyy, today, mm + '/' + String((+dd) + 1) + '/' + yyyy]

    const today = "07/14/2020";
    let dateList = ["07/13/2020", "07/14/2020", "07/15/2020"]

    return (
        <div>
            <TaskUpload />
            <Divider />
            <Row gutter={16} align="top">
                <Col span={1}>
                    <Button type="ghost" shape="circle" icon={<LeftOutlined />} />
                </Col>
                {dateList.map(date => (date === today) ?
                    <Col span={7}><DayCard date={date} today={true} /></Col> :
                    <Col span={7}><DayCard date={date} today={false} /></Col>)}
                <Col span={1}>
                    <Button type="ghost" shape="circle" icon={<RightOutlined />} />
                </Col>
            </Row>

        </div >
    );
}

export default Calendar;