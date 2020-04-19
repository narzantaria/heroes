import React, { Component } from 'react';
import { Button, Drawer, Form, Col, Row, Input, Select, DatePicker } from 'antd';

const dateFormat = 'DD/MM/YYYY';

class HeroForm extends Component {
  constructor(props) {
    super(props);
    //
  }

  render() {
    return (
      <Form
        layout="vertical"
        hideRequiredMark
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
            <Form.Item label="Hero birth date" >
              <DatePicker
                name='birth'
                size='medium'
                format={dateFormat}
                placeholder="Hero birth date"
              />
            </Form.Item>
            <Button onClick={() => { this.props.parentCallback('qwerty') }}>OK</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default HeroForm;