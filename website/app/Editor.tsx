"use client";

import IconPicker from "@echoja/react-icon-picker";
import { useState } from "react";

function Editor() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleSelect = (icon: string) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      <IconPicker icons={["icon1", "icon2", "icon3"]} onSelect={handleSelect} />
      <div>Selected Icon: {selectedIcon}</div>
    </div>
  );
}

export default Editor;
