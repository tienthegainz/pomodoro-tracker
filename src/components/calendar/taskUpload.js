import React, { useState } from "react";
import { Button, Modal, Form, Input, DatePicker } from 'antd';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Add your task"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="task_form"
            >
                <Form.Item
                    name="task"
                    label="Task"
                    rules={[
                        {
                            required: true,
                            message: 'Please write task name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item
                    name="date-picker"
                    label="Task Date"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the day',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const TaskUpload = () => {
    const [visible, setVisible] = useState(false);
    const buttonStyle = {
        position: "relative",
        left: "50%",
        right: "50%",
    };

    const onCreate = values => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
                shape="round"
                style={buttonStyle}
            >
                Add task
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div >
    );
};



export default TaskUpload;