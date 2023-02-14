"use client";

import React from "react";
export { academicons, akarIcons, antDesign, bx, fa6Regular } from "./icons";

export interface IReactIconPickerProps {
  icons: string[];
  onSelect: (icon: string) => void;
}

const ReactIconPicker: React.FC<IReactIconPickerProps> = ({
  icons,
  onSelect,
}) => {
  return (
    <ul>
      {icons.map((icon) => (
        <li key={icon} style={{ color: "blue" }} onClick={() => onSelect(icon)}>
          {icon}
        </li>
      ))}
    </ul>
  );
};

export default ReactIconPicker;
