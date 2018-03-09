# Upgrade guide to v4

## Coding style conventions changed

By updating our `simplr-tslint` rules we enforced `camelCase` style on class and interface members. 

_Example_
```ts
dropdownHandler.Open() -> dropdownHandler.open()
``` 

## isOpen

The name was changed from `open` to `isOpen`.

[Commit](https://github.com/SimplrJS/simplr-dropdown/pull/10/commits/eb88d3ff62ea67c04df5cc6cde9737f7afc1ac64)

_Example_
```tsx
// From
<DropdownHandler defaultOpen={true} open={true}>
    {/* ... */}
</DropdownHandler>

// To
<DropdownHandler defaultIsOpen={true} isOpen={true}>
    {/* ... */}
</DropdownHandler>
``` 

## Handler method IsOpen() to a getter

Handler's method `IsOpen()` is now a getter `isOpen`.

_Example:_
```ts
declare const handler: DropdownHandler;

const isOpen: boolean = handler.isOpen;
``` 
