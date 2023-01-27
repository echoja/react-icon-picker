# React Icon Picker

UI component for selecting an icon from a predefined set of icons sourced from [@iconify/json](https://www.npmjs.com/package/@iconify/json). Developers can specify the list of predefined icons that will be displayed in the picker.

## Features

- Display a predefined set of icons in a dropdown or modal dialog
- Allow user to select an icon by clicking or tapping
- Reusable component that can be easily integrated into other parts of a React-based application
- Typescript support
- Useful for CMS developers to easily allow users to choose an icon while editing content

## Installation

```bash
npm install react-icon-picker
```

## Usage

```ts
import IconPicker from "react-icon-picker";

<IconPicker icons={["icon1", "icon2", "icon3"]} onSelect={handleSelect} />;
```

## Props

| Prop     | Type     | Description                                              |
| -------- | -------- | -------------------------------------------------------- |
| `icons`    | `string[]`    | A list of predefined icons to be displayed in the picker |
| `onSelect` | `Function` | Callback function to handle the selected icon            |

## Example

```ts
import { useState } from "react";
import IconPicker from "react-icon-picker";

function App() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      <IconPicker icons={["icon1", "icon2", "icon3"]} onSelect={handleSelect} />
      <div>Selected Icon: {selectedIcon}</div>
    </div>
  );
}

export default App;
```
