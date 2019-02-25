[![NPM version](https://img.shields.io/npm/v/@reactway/dropdown.svg?logo=npm)](https://www.npmjs.com/package/@reactway/dropdown)
[![Build Status](https://img.shields.io/azure-devops/build/reactway/reactway/1/master.svg?logo=azuredevops)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=1)
[![Code coverage](https://img.shields.io/azure-devops/coverage/reactway/reactway/1/master.svg)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=1)
[![Dependencies](https://img.shields.io/david/reactway/dropdown.svg)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=1)
[![Dev dependencies](https://img.shields.io/david/dev/reactway/dropdown.svg)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=1)

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

<sup>*</sup> This will not work when click event has stopped propagation (`event.stopPropagation()`) and therefore `window.addEventListener("click", ...)` will not receive event.

## License
Released under the [MIT license](LICENSE).
