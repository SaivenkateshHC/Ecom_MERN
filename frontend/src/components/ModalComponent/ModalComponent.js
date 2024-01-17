import React from "react";
import {Modal} from 'antd';

const ModalComponent = ({
    open,
    title,
    children,
    cancelHandler
}) => {
  return (
    <Modal
      open={open}
      title={title}
      footer={null}
        onCancel={cancelHandler}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
