# Table of contents

* [index.ts][SourceFile-0]
    * Interfaces
        * [HandlerBaseProps][InterfaceDeclaration-0]
        * [HandlerBaseState][InterfaceDeclaration-1]
        * [BaseHandlerChildContext][InterfaceDeclaration-2]
        * [HeaderBaseProps][InterfaceDeclaration-3]
        * [HeaderBaseState][InterfaceDeclaration-4]
        * [HeaderBaseContext][InterfaceDeclaration-5]
        * [SectionBaseProps][InterfaceDeclaration-6]
        * [SectionBaseState][InterfaceDeclaration-7]
        * [SectionBaseContext][InterfaceDeclaration-8]
    * Enums
        * [EventSource][EnumDeclaration-0]

# index.ts

## Interfaces

### HandlerBaseProps

```typescript
interface HandlerBaseProps {
    defaultOpen?: boolean | undefined;
    open?: boolean | undefined;
    onOpen?: ((source: EventSource) => void) | undefined;
    onClose?: ((source: EventSource) => void) | undefined;
    onToggle?: ((isOpened: boolean, source: EventSource) => void) | undefined;
    toggleOnHeaderClick?: boolean | undefined;
    closeOnOutsideClick?: boolean | undefined;
    closeOnSectionClick?: boolean | undefined;
    closeOnEscapeClick?: boolean | undefined;
}
```

**Properties**

| Name                | Type                                                                | Optional |
| ------------------- | ------------------------------------------------------------------- | -------- |
| defaultOpen         | boolean &#124; undefined                                            | true     |
| open                | boolean &#124; undefined                                            | true     |
| onOpen              | ((source: EventSource) => void) &#124; undefined                    | true     |
| onClose             | ((source: EventSource) => void) &#124; undefined                    | true     |
| onToggle            | ((isOpened: boolean, source: EventSource) => void) &#124; undefined | true     |
| toggleOnHeaderClick | boolean &#124; undefined                                            | true     |
| closeOnOutsideClick | boolean &#124; undefined                                            | true     |
| closeOnSectionClick | boolean &#124; undefined                                            | true     |
| closeOnEscapeClick  | boolean &#124; undefined                                            | true     |

----------

### HandlerBaseState

```typescript
interface HandlerBaseState {
    open: boolean;
}
```

**Properties**

| Name | Type    | Optional |
| ---- | ------- | -------- |
| open | boolean | false    |

----------

### BaseHandlerChildContext

```typescript
interface BaseHandlerChildContext {
    dropdownOpen: boolean;
    dropdownOnHeaderClickCallback: Function;
    dropdownOnSectionClickCallback: Function;
}
```

**Properties**

| Name                           | Type     | Optional |
| ------------------------------ | -------- | -------- |
| dropdownOpen                   | boolean  | false    |
| dropdownOnHeaderClickCallback  | Function | false    |
| dropdownOnSectionClickCallback | Function | false    |

----------

### HeaderBaseProps

```typescript
interface HeaderBaseProps {
}
```

----------

### HeaderBaseState

```typescript
interface HeaderBaseState {
}
```

----------

### HeaderBaseContext

```typescript
interface HeaderBaseContext {
    dropdownOnHeaderClickCallback: Function;
    dropdownOpen: boolean;
}
```

**Properties**

| Name                          | Type     | Optional |
| ----------------------------- | -------- | -------- |
| dropdownOnHeaderClickCallback | Function | false    |
| dropdownOpen                  | boolean  | false    |

----------

### SectionBaseProps

```typescript
interface SectionBaseProps {
}
```

----------

### SectionBaseState

```typescript
interface SectionBaseState {
}
```

----------

### SectionBaseContext

```typescript
interface SectionBaseContext {
    dropdownOnSectionClickCallback: Function;
    dropdownOpen: boolean;
}
```

**Properties**

| Name                           | Type     | Optional |
| ------------------------------ | -------- | -------- |
| dropdownOnSectionClickCallback | Function | false    |
| dropdownOpen                   | boolean  | false    |

## Enums

### EventSource


```typescript
enum EventSource {
     HeaderClick = 8,
     SectionClick = 16,
     OutsideClick = 24,
     EscapeClick = 32
}
```

**Members**

| Name         | Value |
| ------------ | ----- |
| HeaderClick  | 8     |
| SectionClick | 16    |
| OutsideClick | 24    |
| EscapeClick  | 32    |

## Classes

### [HandlerBase][ClassDeclaration-0]


----------

### [HeaderBase][ClassDeclaration-1]


----------

### [SectionBase][ClassDeclaration-2]


[SourceFile-0]: index.md#indexts
[InterfaceDeclaration-0]: index.md#handlerbaseprops
[InterfaceDeclaration-1]: index.md#handlerbasestate
[InterfaceDeclaration-2]: index.md#basehandlerchildcontext
[InterfaceDeclaration-3]: index.md#headerbaseprops
[InterfaceDeclaration-4]: index.md#headerbasestate
[InterfaceDeclaration-5]: index.md#headerbasecontext
[InterfaceDeclaration-6]: index.md#sectionbaseprops
[InterfaceDeclaration-7]: index.md#sectionbasestate
[InterfaceDeclaration-8]: index.md#sectionbasecontext
[EnumDeclaration-0]: index.md#eventsource
[ClassDeclaration-0]: index/handlerbase.md#handlerbase
[ClassDeclaration-1]: index/headerbase.md#headerbase
[ClassDeclaration-2]: index/sectionbase.md#sectionbase