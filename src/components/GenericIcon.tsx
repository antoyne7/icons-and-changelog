import React from "react";
import { andtIconAdapter } from "./utils";

// import * as Icons from "@ant-design/icons/lib/icons";

interface GenericIconProps {
  icon: string;
}

const GenericIcon: React.FC<GenericIconProps> = ({ icon }) => {
  const antdIconName = andtIconAdapter(icon);
  if (!antdIconName) {
    return null;
  }

  return null;

  // const IconComponent = Icons[antdIconName as keyof typeof Icons] as
  //   | React.FC
  //   | undefined;

  // return IconComponent ? <IconComponent /> : null;
};

export { GenericIcon };
