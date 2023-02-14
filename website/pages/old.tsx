import ReactIconPicker, {
  academicons,
  akarIcons,
  antDesign,
} from "@eszqsc112/react-icon-picker";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("academicons", academicons);
    console.log("akarIcons", akarIcons);
    console.log("antDesign", antDesign);
  }, []);

  return (
    <div>
      <h2>home!</h2>
      <ReactIconPicker
        icons={["icon1", "icon2", "icon3"]}
        onSelect={() => {}}
      />
    </div>
  );
}
