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
npm install @eszqsc112/react-icon-picker
```

## Usage

```ts
import IconPicker from "@eszqsc112/react-icon-picker";

<IconPicker icons={["icon1", "icon2", "icon3"]} onSelect={handleSelect} />;
```

## Props

| Prop       | Type       | Description                                              |
| ---------- | ---------- | -------------------------------------------------------- |
| `icons`    | `string[]` | A list of predefined icons to be displayed in the picker |
| `onSelect` | `Function` | Callback function to handle the selected icon            |

## Example

```tsx
import IconPicker from "@eszqsc112/react-icon-picker";
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
```

## Development Guide

- The project is built with [TypeScript](https://www.typescriptlang.org/)
- The `website` directory is a workspace that uses [Next.js](https://nextjs.org/) for testing and documentation
- The project uses [TurboRepo](https://turborepo.org/) for easy management of multiple packages in a monorepo
- Uses [pnpm](https://pnpm.js.org/) for package management

### Commands

- `pnpm run dev` starts the development server
- `pnpm run build` builds the project for production
- `pnpm run test` runs tests
- `pnpm run lint` runs linting
