# @reactway/dropdown

## [Docs](./docs/index.md) | [API](./docs/api/index.md)

A flexible React dropdown component. Created with hooks :tada:.

## Get started 
```sh
$ npm install @reactway/dropdown
```

## Features
- Toggles dropdown when clicked on `DropdownHeader` component
- Closes dropdown when clicked outside of `DropdownHandler` component<sup>*</sup>
- Closes dropdown when clicked on `DropdownSection` component
- Closes dropdown when clicked Escape button on keyboard
- Extendable base components
- Supports server side rendering

<sup>*</sup> This will not work when click event has stopped propogation (`event.stopPropagation()`) and therefore `window.addEventListener("click", ...)` will not receive event.

## License
Released under the [MIT license](LICENSE).
