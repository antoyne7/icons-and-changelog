import React, { Suspense } from "react";
import Icon, { CheckOutlined } from "@ant-design/icons";
import EditOutlined from "@material-design-icons/svg/outlined/edit.svg?react";
import { GenericIcon } from "./GenericIcon";

const Laboratory: React.FC = () => {
  return (
    <div>
      <div>
        <span>Generic icon: </span>
        <span>
          <GenericIcon icon="EditOutlined" />
        </span>
      </div>
      <div>
        <span>Antd icon:</span>
        <span>
          <CheckOutlined />
        </span>
      </div>
      <div>
        <span>Material icon: </span>
        <span>
          <Icon component={EditOutlined} />
        </span>
      </div>
    </div>
  );
};

export default Laboratory;
