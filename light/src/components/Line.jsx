import React from 'react';
import { Progress } from 'antd';

const Line = () => {
  return (
    <Progress
      percent={100}
      strokeColor={'sienna'}
      status="active"
      showInfo={false}
      strokeWidth={'5px'}
      style={{ marginBottom: '10px' }}
    />
  );
};

export default Line;