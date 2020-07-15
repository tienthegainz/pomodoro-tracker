import React, { useState, useEffect } from "react"
import { Select, Divider } from 'antd';

const Pomodoro = () => {
    const [task, setTask] = useState(null);
    const [taskList, setTaskList] = useState([]);
    const { Option } = Select;
    const selectStyle = {
        position: "relative",
        left: "45%",
    };

    useEffect(() => {
        setTaskList(["Hoc Bong", "Code", "Research", "Cót web"])
    }, [])

    function onChange(value) {
        console.log(`selected ${value}`);
        setTask(value);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a task"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={selectStyle}
            >
                {taskList.map(t => <Option value={t}>{t}</Option>)}
            </Select>
            <Divider />
            Clock here
        </div >
    );
}

export default Pomodoro;