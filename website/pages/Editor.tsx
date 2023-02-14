"use client";

import IconPicker from "@eszqsc112/react-icon-picker";
import { useEffect, useState } from "react";

function Editor() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  useEffect(() => {
    console.log("from Next.js!");
    // console.log("academicons", academicons);
    // console.log("akarIcons", akarIcons);
    // console.log("antDesign", antDesign);
  }, []);

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
