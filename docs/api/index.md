# Table of contents

* [index.ts][SourceFile-0]
    * Interfaces
        * [HandlerBaseProps][InterfaceDeclaration-0]
        * [HandlerBaseState][InterfaceDeclaration-1]
        * [BaseHandlerChildContext][InterfaceDeclaration-2]
        * [HeaderBaseContext][InterfaceDeclaration-3]
        * [SectionBaseContext][InterfaceDeclaration-4]
        * [DropdownHandlerProps][InterfaceDeclaration-5]
        * [DropdownHeaderProps][InterfaceDeclaration-7]
        * [DropdownSectionProps][InterfaceDeclaration-8]
        * [HTMLElementProps][InterfaceDeclaration-6]
    * Types
        * [DropdownOnToggleHandler][TypeAliasDeclaration-0]
        * [DropdownOnOpenHandler][TypeAliasDeclaration-1]
        * [DropdownOnCloseHandler][TypeAliasDeclaration-2]
    * Enums
        * [EventSource][EnumDeclaration-0]

# index.ts

## Interfaces

### HandlerBaseProps

```typescript
interface HandlerBaseProps {
    defaultIsOpen?: boolean | undefined;
    isOpen?: boolean | undefined;
    onOpen?: DropdownOnOpenHandler | undefined;
    onClose?: DropdownOnOpenHandler | undefined;
    onToggle?: DropdownOnToggleHandler | undefined;
    toggleOnHeaderClick?: boolean | undefined;
    closeOnOutsideClick?: boolean | undefined;
    closeOnSectionClick?: boolean | undefined;
    closeOnEscapeClick?: boolean | undefined;
}
```

**Properties**

| Name                | Type                                     | Optional |
| ------------------- | ---------------------------------------- | -------- |
| defaultIsOpen       | boolean &#124; undefined                 | true     |
| isOpen              | boolean &#124; undefined                 | true     |
| onOpen              | DropdownOnOpenHandler &#124; undefined   | true     |
| onClose             | DropdownOnOpenHandler &#124; undefined   | true     |
| onToggle            | DropdownOnToggleHandler &#124; undefined | true     |
| toggleOnHeaderClick | boolean &#124; undefined                 | true     |
| closeOnOutsideClick | boolean &#124; undefined                 | true     |
| closeOnSectionClick | boolean &#124; undefined                 | true     |
| closeOnEscapeClick  | boolean &#124; undefined                 | true     |

----------

### HandlerBaseState

```typescript
interface HandlerBaseState {
    isOpen: boolean;
}
```

**Properties**

| Name   | Type    | Optional |
| ------ | ------- | -------- |
| isOpen | boolean | false    |

----------

### BaseHandlerChildContext

```typescript
interface BaseHandlerChildContext {
    dropdownIsOpen: boolean;
    dropdownOnHeaderClickCallback: () => void;
    dropdownOnSectionClickCallback: () => void;
}
```

**Properties**

| Name                           | Type       | Optional |
| ------------------------------ | ---------- | -------- |
| dropdownIsOpen                 | boolean    | false    |
| dropdownOnHeaderClickCallback  | () => void | false    |
| dropdownOnSectionClickCallback | () => void | false    |

----------

### HeaderBaseContext

```typescript
interface HeaderBaseContext {
    dropdownOnHeaderClickCallback: Function;
    dropdownIsOpen: boolean;
}
```

**Properties**

| Name                          | Type     | Optional |
| ----------------------------- | -------- | -------- |
| dropdownOnHeaderClickCallback | Function | false    |
| dropdownIsOpen                | boolean  | false    |

----------

### SectionBaseContext

```typescript
interface SectionBaseContext {
    dropdownOnSectionClickCallback: Function;
    dropdownIsOpen: boolean;
}
```

**Properties**

| Name                           | Type     | Optional |
| ------------------------------ | -------- | -------- |
| dropdownOnSectionClickCallback | Function | false    |
| dropdownIsOpen                 | boolean  | false    |

----------

### DropdownHandlerProps

```typescript
interface DropdownHandlerProps extends HandlerBaseProps, HTMLElementProps<HTMLDivElement> {
    ref?: string | ((instance: DropdownHandler | null) => any) | undefined<DropdownHandler>;
}
```

**Extends**

[HandlerBaseProps][InterfaceDeclaration-0]

[HTMLElementProps][InterfaceDeclaration-6]<HTMLDivElement>

**Properties**

| Name | Type                                                                                                                   | Optional |
| ---- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| ref  | string &#124; ((instance: DropdownHandler &#124; null) => any) &#124; undefined<[DropdownHandler][ClassDeclaration-3]> | true     |

----------

### DropdownHeaderProps

```typescript
interface DropdownHeaderProps extends HTMLElementProps<HTMLDivElement> {
    ref?: string | ((instance: DropdownHeader | null) => any) | undefined<DropdownHeader>;
}
```

**Extends**

[HTMLElementProps][InterfaceDeclaration-6]<HTMLDivElement>

**Properties**

| Name | Type                                                                                                                 | Optional |
| ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ref  | string &#124; ((instance: DropdownHeader &#124; null) => any) &#124; undefined<[DropdownHeader][ClassDeclaration-4]> | true     |

----------

### DropdownSectionProps

```typescript
interface DropdownSectionProps extends HTMLElementProps<HTMLDivElement> {
    ref?: string | ((instance: DropdownSection | null) => any) | undefined<DropdownSection>;
}
```

**Extends**

[HTMLElementProps][InterfaceDeclaration-6]<HTMLDivElement>

**Properties**

| Name | Type                                                                                                                   | Optional |
| ---- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| ref  | string &#124; ((instance: DropdownSection &#124; null) => any) &#124; undefined<[DropdownSection][ClassDeclaration-5]> | true     |

----------

### HTMLElementProps

```typescript
interface HTMLElementProps<TElement> extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    ref?: string | ((instance: any) => any) | undefined<any>;
}
```

**Type parameters**

| Name     |
| -------- |
| TElement |

**Extends**

DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

**Properties**

| Name | Type                                                         | Optional |
| ---- | ------------------------------------------------------------ | -------- |
| ref  | string &#124; ((instance: any) => any) &#124; undefined<any> | true     |

## Types

### DropdownOnToggleHandler

```typescript
type DropdownOnToggleHandler = (isOpen: boolean, source: EventSource) => void;
```

**Type**

(isOpen: boolean, source: EventSource) => void

----------

### DropdownOnOpenHandler

```typescript
type DropdownOnOpenHandler = (source: EventSource) => void;
```

**Type**

(source: EventSource) => void

----------

### DropdownOnCloseHandler

```typescript
type DropdownOnCloseHandler = (source: EventSource) => void;
```

**Type**

(source: EventSource) => void

## Enums

### EventSource


```typescript
enum EventSource {
     HeaderClick = 8,
     SectionClick = 16,
     OutsideClick = 24,
     EscapeClick = 32,
     ManualTrigger = 64
}
```

**Members**

| Name          | Value |
| ------------- | ----- |
| HeaderClick   | 8     |
| SectionClick  | 16    |
| OutsideClick  | 24    |
| EscapeClick   | 32    |
| ManualTrigger | 64    |

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
[InterfaceDeclaration-3]: index.md#headerbasecontext
[InterfaceDeclaration-4]: index.md#sectionbasecontext
[InterfaceDeclaration-5]: index.md#dropdownhandlerprops
[InterfaceDeclaration-0]: index.md#handlerbaseprops
[InterfaceDeclaration-6]: index.md#htmlelementprops
[ClassDeclaration-3]: index/dropdownhandler.md#dropdownhandler
[InterfaceDeclaration-7]: index.md#dropdownheaderprops
[InterfaceDeclaration-6]: index.md#htmlelementprops
[ClassDeclaration-4]: index/dropdownheader.md#dropdownheader
[InterfaceDeclaration-8]: index.md#dropdownsectionprops
[InterfaceDeclaration-6]: index.md#htmlelementprops
[ClassDeclaration-5]: index/dropdownsection.md#dropdownsection
[InterfaceDeclaration-6]: index.md#htmlelementprops
[TypeAliasDeclaration-0]: index.md#dropdownontogglehandler
[TypeAliasDeclaration-1]: index.md#dropdownonopenhandler
[TypeAliasDeclaration-2]: index.md#dropdownonclosehandler
[EnumDeclaration-0]: index.md#eventsource
[ClassDeclaration-0]: index/handlerbase.md#handlerbase
[ClassDeclaration-1]: index/headerbase.md#headerbase
[ClassDeclaration-2]: index/sectionbase.md#sectionbase
[ClassDeclaration-3]: index/dropdownhandler.md#dropdownhandler
[ClassDeclaration-4]: index/dropdownheader.md#dropdownheader
[ClassDeclaration-5]: index/dropdownsection.md#dropdownsection