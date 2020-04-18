import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

const Spinner = () => {
  return (
    <div className='dark'>
      <div className="vc">
        <Spin size="large" />
      </div>
    </div>
  );
};

export default Spinner;