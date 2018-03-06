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
        * [DropdownHandlerProps][InterfaceDeclaration-9]
        * [DropdownHeaderProps][InterfaceDeclaration-10]
        * [DropdownSectionProps][InterfaceDeclaration-11]
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

----------

### DropdownHandlerProps

```typescript
interface DropdownHandlerProps extends HandlerBaseProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
```

**Extends**

[HandlerBaseProps][InterfaceDeclaration-0]

DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

----------

### DropdownHeaderProps

```typescript
interface DropdownHeaderProps extends HeaderBaseProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
```

**Extends**

[HeaderBaseProps][InterfaceDeclaration-3]

DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

----------

### DropdownSectionProps

```typescript
interface DropdownSectionProps extends SectionBaseProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
```

**Extends**

[SectionBaseProps][InterfaceDeclaration-6]

DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

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


----------

### [DropdownHandler][ClassDeclaration-3]


----------

### [DropdownHeader][ClassDeclaration-4]


----------

### [DropdownSection][ClassDeclaration-5]


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
[InterfaceDeclaration-9]: index.md#dropdownhandlerprops
[InterfaceDeclaration-0]: index.md#handlerbaseprops
[InterfaceDeclaration-10]: index.md#dropdownheaderprops
[InterfaceDeclaration-3]: index.md#headerbaseprops
[InterfaceDeclaration-11]: index.md#dropdownsectionprops
[InterfaceDeclaration-6]: index.md#sectionbaseprops
[EnumDeclaration-0]: index.md#eventsource
[ClassDeclaration-0]: index/handlerbase.md#handlerbase
[ClassDeclaration-1]: index/headerbase.md#headerbase
[ClassDeclaration-2]: index/sectionbase.md#sectionbase
[ClassDeclaration-3]: index/dropdownhandler.md#dropdownhandler
[ClassDeclaration-4]: index/dropdownheader.md#dropdownheader
[ClassDeclaration-5]: index/dropdownsection.md#dropdownsection