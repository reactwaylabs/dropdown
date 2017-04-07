simplr-dropdown
===============
A flexible React dropdown component.

[![Build Status](https://travis-ci.org/SimplrJS/simplr-dropdown.svg?branch=master)](https://travis-ci.org/SimplrJS/simplr-dropdown)
[![NPM version](http://img.shields.io/npm/v/simplr-dropdown.svg)](https://www.npmjs.com/package/simplr-dropdown) [![dependencies Status](https://david-dm.org/simplrjs/simplr-dropdown/status.svg)](https://david-dm.org/simplrjs/simplr-dropdown) [![devDependencies Status](https://david-dm.org/simplrjs/simplr-dropdown/dev-status.svg)](https://david-dm.org/simplrjs/simplr-dropdown?type=dev)

## Get started 
```sh
$ npm install simplr-dropdown --save
```
or
```sh
$ yarn add simplr-dropdown
```

## Features
- Toggles dropdown when clicked on `DropdownHeader` component
- Closes dropdown when clicked outside of `DropdownHandler` component<sup>*</sup>
- Closes dropdown when clicked on `DropdownSection` component
- Closes dropdown when clicked Escape button on keyboard
- Extendable base components


<sup>*</sup> This will not work when click event has stopped propogation (`event.stopPropagation()`) and therefore `window.addEventListener("click", ...)` will not receive event.

## Simple example
_More examples and demo will be soon_
```tsx
import { DropdownHandler, DropdownHeader, DropdownSection } from "simplr-dropdown";

export function DropdownMenu(props: {}) {
    return <DropdownHandler>
        <DropdownHeader>
            Profile
        </DropdownHeader>
        <DropdownSection>
            <ul>
                <li>View profile</li>
                <li>Edit profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </DropdownSection>
    </DropdownHandler>;
}
```

## Components

### DropdownHandler
The main component of dropdown. It controls when to show section of dropdown.
By default this component uses `div` element as a container.
```typescript
import { DropdownHandler } from "simplr-dropdown";
```

#### Props
| Prop                  | Type                                                  | Default   | Description                                                       |
| --------------------- | ----------------------------------------------------- | --------- | ----------------------------------------------------------------- |
| defaultOpen           | boolean                                               | false     | Dropdown open state when it will be mounted                       |
| open                  | boolean                                               | undefined | Controlling dropdown from outside                                 |
| onOpen                | [DropdownOnOpenCallback](#dropdownonopencallback)     | none      | Triggers callback when dropdown opens                             |
| onClose               | [DropdownOnCloseCallback](#dropdownonclosecallback)   | none      | Triggers callback when dropdown closes                            |
| onToggle              | [DropdownOnToggleCallback](#dropdownontogglecallback) | none      | Triggers callback when toggles                                    |
| toggleOnHeaderClick   | boolean                                               | true      | Toggles when clicking on `DropdownHeader`                         |
| closeOnOutsideClick   | boolean                                               | true      | Closes when clicked outside of `DropdownHandler` component        |
| closeOnSectionClick   | boolean                                               | false     | Closes when clicked on `DropdownSection` component                |
| closeOnEscapeClick    | function                                              | true      | Closes when clicked `Escape` key on keyboard                      |

#### Methods
These methods can be used when you save component instance.

| Method   | Description                             |
| -------- | --------------------------------------- |
| IsOpen() | Returns boolean if dropdown open or not | 
| Open()   | Opens dropdown                          |
| Close()  | Closes dropdown                         |

#### Example
```tsx
export class DropdownExample extends React.Component<{}, {}> {
    private dropdownComponent: DropdownHandler;

    private onButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if (this.dropdownComponent.IsOpen()) {
            this.dropdownComponent.Close();
        } else {
            this.dropdownComponent.Open();
        }
    }

    private setDropdownRef = (component: DropdownHandler) => {
        this.dropdownComponent = component;
    }

    render() {
        return <div>
            <button onClick={this.onButtonClick}>
                Toggle dropdown outside!
            </button>
            <DropdownHandler ref={this.setDropdownRef}>
                <DropdownHeader>
                    {/* ... */}
                </DropdownHeader>
                <DropdownSection>
                    {/* ... */}
                </DropdownSection>
            </DropdownHandler>
        </div>;
    }
}
```

### DropdownHeader
Click on this component will toggle dropdown open state.
By default this component uses `div` element as a container.
```typescript
import { DropdownHeader } from "simplr-dropdown";
```

### DropdownSection
This component will be show when open state is `true` otherwise it will render `null`.
By default this component uses `div` element as a container.
```typescript
import { DropdownSection } from "simplr-dropdown";
```

## Contracts
```typescript
import { Contracts } from "simplr-dropdown";
```

### Interfaces

#### DropdownOnOpenCallback
```typescript
interface DropdownOnOpenCallback {
    (source: EventSource): void;
}
```

##### Arguments
- `source: `[EventSource](#eventsource) - Event source from where it got triggered 

#### DropdownOnCloseCallback
```typescript
interface DropdownOnCloseCallback {
    (source: EventSource): void;
}
```

##### Arguments
- `source: `[EventSource](#eventsource) - Event source from where it got triggered 


#### DropdownOnToggleCallback
```typescript
interface DropdownOnToggleCallback {
    (isOpened: boolean, source: EventSource): void;
}
```

##### Arguments
- `isOpened: boolean` - dropdown is opened or not
- `source: `[EventSource](#eventsource) - Event source from where it got triggered 



### Enums

#### EventSource
```tsx
enum EventSource {
    HeaderClick = 8,    // On DropdownHeader click
    SectionClick = 16,  // On DropdownSection click 
    OutsideClick = 24,  // On outside of Dropdown container element click
    EscapeClick = 32    // Keyboard key escape clicked
}
```

## License
Released under the [MIT license](LICENSE).
