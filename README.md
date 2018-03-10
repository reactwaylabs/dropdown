[![NPM version](https://img.shields.io/npm/v/simplr-dropdown.svg)](https://www.npmjs.com/package/simplr-dropdown)
[![Build Status](https://travis-ci.org/SimplrJS/simplr-dropdown.svg?branch=master)](https://travis-ci.org/SimplrJS/simplr-dropdown)
[![Coverage Status](https://coveralls.io/repos/github/SimplrJS/simplr-dropdown/badge.svg?branch=master)](https://coveralls.io/github/SimplrJS/simplr-dropdown?branch=master)
[![dependencies Status](https://david-dm.org/SimplrJS/simplr-dropdown/status.svg)](https://david-dm.org/SimplrJS/simplr-dropdown)
[![devDependencies Status](https://david-dm.org/SimplrJS/simplr-dropdown/dev-status.svg)](https://david-dm.org/SimplrJS/simplr-dropdown?type=dev)
[![devDependencies Status](https://img.shields.io/npm/l/simplr-dropdown.svg)](https://npmjs.org/package/simplr-dropdown)

# simplr-dropdown

## [Docs](./docs/index.md) | [API](./docs/api/index.md)

A flexible React dropdown component.

## Get started 
```sh
$ npm install simplr-dropdown
```

## Features
- Toggles dropdown when clicked on `DropdownHeader` component
- Closes dropdown when clicked outside of `DropdownHandler` component<sup>*</sup>
- Closes dropdown when clicked on `DropdownSection` component
- Closes dropdown when clicked Escape button on keyboard
- Extendable base components
- Supports server side rendering

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

## License
Released under the [MIT license](LICENSE).
