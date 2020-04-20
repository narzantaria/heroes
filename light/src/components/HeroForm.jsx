import React, { Component } from 'react';
import { Button, Drawer, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

class HeroForm extends Component {
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
          this.props.sendbackData(values.name, [], new Date(values.date).toISOString())
        }}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter user name' }]}
            >
              <Input placeholder="Please enter hero name" />
            </Form.Item>
            <Form.Item label="Hero birth date" name="date">
              <DatePicker
                size="medium"
                format={dateFormat}
                placeholder="Hero birth date"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >OK</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default HeroForm;