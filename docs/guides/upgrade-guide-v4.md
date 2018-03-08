# Upgrade guide to v4

## Coding style conventions changed

By updating our `simplr-tslint` rules we enforced `camelCase` style on class and interface members. 

_For example_
```ts
dropdownHandler.IsOpen() -> dropdownHandler.isOpen()
``` 

## isOpen

To be more clear, we changed from `open` to `isOpen. [Commit](https://github.com/SimplrJS/simplr-dropdown/pull/10/commits/eb88d3ff62ea67c04df5cc6cde9737f7afc1ac64)

_For example_
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
