import React, { Component } from 'react';
import { Button, Drawer, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

class SkillForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <Form
        layout="vertical"
        initialValues={{ 
          ...data,
          date: data ? moment(new Date(data.date), dateFormat) : ''
        }}
        onFinish={values => {
          this.props.sendbackData(values.name, values.description, new Date(values.date).toISOString())
        }}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter skill name' }]}
            >
              <Input placeholder="Please enter Skill name" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter skill description' }]}
            >
              <Input.TextArea placeholder="Please enter Skill name" />
            </Form.Item>
            <Form.Item label="Skill date" name="date">
              <DatePicker
                size="medium"
                format={dateFormat}
                placeholder="Skill date"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >Save</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SkillForm;