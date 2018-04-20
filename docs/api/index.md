# Table of contents

* [index.ts][SourceFile-0]
    * Interfaces
        * [HandlerBaseProps][InterfaceDeclaration-0]
        * [HandlerBaseState][InterfaceDeclaration-2]
        * [BaseHandlerChildContext][InterfaceDeclaration-3]
        * [HeaderBaseProps][InterfaceDeclaration-4]
        * [HeaderBaseContext][InterfaceDeclaration-5]
        * [SectionBaseProps][InterfaceDeclaration-6]
        * [SectionBaseContext][InterfaceDeclaration-7]
        * [DropdownHandlerProps][InterfaceDeclaration-8]
        * [DropdownHeaderProps][InterfaceDeclaration-10]
        * [DropdownSectionProps][InterfaceDeclaration-11]
        * [HTMLElementProps][InterfaceDeclaration-9]
        * [ClassNameProps][InterfaceDeclaration-1]
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
interface HandlerBaseProps extends ClassNameProps {
    defaultIsOpen?: boolean | undefined;
    isOpen?: boolean | undefined;
    onOpen?: DropdownOnOpenHandler | undefined;
    onClose?: DropdownOnOpenHandler | undefined;
    onToggle?: DropdownOnToggleHandler | undefined;
    disabled?: boolean | undefined;
    toggleOnHeaderClick?: boolean | undefined;
    closeOnOutsideClick?: boolean | undefined;
    closeOnSectionClick?: boolean | undefined;
    closeOnEscapeClick?: boolean | undefined;
}
```

**Extends**

[ClassNameProps][InterfaceDeclaration-1]

**Properties**

| Name                | Type                                     | Optional |
| ------------------- | ---------------------------------------- | -------- |
| defaultIsOpen       | boolean &#124; undefined                 | true     |
| isOpen              | boolean &#124; undefined                 | true     |
| onOpen              | DropdownOnOpenHandler &#124; undefined   | true     |
| onClose             | DropdownOnOpenHandler &#124; undefined   | true     |
| onToggle            | DropdownOnToggleHandler &#124; undefined | true     |
| disabled            | boolean &#124; undefined                 | true     |
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
    dropdownIsDisabled: boolean;
    dropdownOnHeaderClickCallback: () => void;
    dropdownOnSectionClickCallback: () => void;
}
```

**Properties**

| Name                           | Type       | Optional |
| ------------------------------ | ---------- | -------- |
| dropdownIsOpen                 | boolean    | false    |
| dropdownIsDisabled             | boolean    | false    |
| dropdownOnHeaderClickCallback  | () => void | false    |
| dropdownOnSectionClickCallback | () => void | false    |

----------

### HeaderBaseProps

```typescript
interface HeaderBaseProps extends ClassNameProps {
}
```

**Extends**

[ClassNameProps][InterfaceDeclaration-1]

----------

### HeaderBaseContext

```typescript
interface HeaderBaseContext {
    dropdownIsOpen: boolean;
    dropdownIsDisabled: boolean;
    dropdownOnHeaderClickCallback: () => void;
}
```

**Properties**

| Name                          | Type       | Optional |
| ----------------------------- | ---------- | -------- |
| dropdownIsOpen                | boolean    | false    |
| dropdownIsDisabled            | boolean    | false    |
| dropdownOnHeaderClickCallback | () => void | false    |

----------

### SectionBaseProps

```typescript
interface SectionBaseProps extends ClassNameProps {
}
```

**Extends**

[ClassNameProps][InterfaceDeclaration-1]

----------

### SectionBaseContext

```typescript
interface SectionBaseContext {
    dropdownIsOpen: boolean;
    dropdownIsDisabled: boolean;
    dropdownOnSectionClickCallback: () => void;
}
```

**Properties**

| Name                           | Type       | Optional |
| ------------------------------ | ---------- | -------- |
| dropdownIsOpen                 | boolean    | false    |
| dropdownIsDisabled             | boolean    | false    |
| dropdownOnSectionClickCallback | () => void | false    |

----------

### DropdownHandlerProps

```typescript
interface DropdownHandlerProps extends HandlerBaseProps, HTMLElementProps<HTMLDivElement> {
    ref?: string | ((instance: DropdownHandler | null) => any) | RefObject<DropdownHandler> | undefined<DropdownHandler>;
}
```

**Extends**

[HandlerBaseProps][InterfaceDeclaration-0]

[HTMLElementProps][InterfaceDeclaration-9]<HTMLDivElement>

**Properties**

| Name | Type                                                                                                                                                     | Optional |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| ref  | string &#124; ((instance: DropdownHandler &#124; null) => any) &#124; RefObject<DropdownHandler> &#124; undefined<[DropdownHandler][ClassDeclaration-3]> | true     |

----------

### DropdownHeaderProps

```typescript
interface DropdownHeaderProps extends HTMLElementProps<HTMLDivElement>, HeaderBaseProps {
    ref?: string | ((instance: DropdownHeader | null) => any) | RefObject<DropdownHeader> | undefined<DropdownHeader>;
}
```

**Extends**

[HTMLElementProps][InterfaceDeclaration-9]<HTMLDivElement>

[HeaderBaseProps][InterfaceDeclaration-4]

**Properties**

| Name | Type                                                                                                                                                  | Optional |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| ref  | string &#124; ((instance: DropdownHeader &#124; null) => any) &#124; RefObject<DropdownHeader> &#124; undefined<[DropdownHeader][ClassDeclaration-4]> | true     |

----------

### DropdownSectionProps

```typescript
interface DropdownSectionProps extends HTMLElementProps<HTMLDivElement>, SectionBaseProps {
    ref?: string | ((instance: DropdownSection | null) => any) | RefObject<DropdownSection> | undefined<DropdownSection>;
}
```

**Extends**

[HTMLElementProps][InterfaceDeclaration-9]<HTMLDivElement>

[SectionBaseProps][InterfaceDeclaration-6]

**Properties**

| Name | Type                                                                                                                                                     | Optional |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| ref  | string &#124; ((instance: DropdownSection &#124; null) => any) &#124; RefObject<DropdownSection> &#124; undefined<[DropdownSection][ClassDeclaration-5]> | true     |

----------

### HTMLElementProps

```typescript
interface HTMLElementProps<TElement> extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    ref?: string | ((instance: any) => any) | RefObject<any> | undefined<any>;
}
```

**Type parameters**

| Name     |
| -------- |
| TElement |

**Extends**

DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

**Properties**

| Name | Type                                                                               | Optional |
| ---- | ---------------------------------------------------------------------------------- | -------- |
| ref  | string &#124; ((instance: any) => any) &#124; RefObject<any> &#124; undefined<any> | true     |

----------

### ClassNameProps

```typescript
interface ClassNameProps {
    className?: string | undefined;
    openClassName?: string | undefined;
    closedClassName?: string | undefined;
    disabledClassName?: string | undefined;
}
```

**Properties**

| Name              | Type                    | Optional |
| ----------------- | ----------------------- | -------- |
| className         | string &#124; undefined | true     |
| openClassName     | string &#124; undefined | true     |
| closedClassName   | string &#124; undefined | true     |
| disabledClassName | string &#124; undefined | true     |

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
[InterfaceDeclaration-1]: index.md#classnameprops
[InterfaceDeclaration-2]: index.md#handlerbasestate
[InterfaceDeclaration-3]: index.md#basehandlerchildcontext
[InterfaceDeclaration-4]: index.md#headerbaseprops
[InterfaceDeclaration-1]: index.md#classnameprops
[InterfaceDeclaration-5]: index.md#headerbasecontext
[InterfaceDeclaration-6]: index.md#sectionbaseprops
[InterfaceDeclaration-1]: index.md#classnameprops
[InterfaceDeclaration-7]: index.md#sectionbasecontext
[InterfaceDeclaration-8]: index.md#dropdownhandlerprops
[InterfaceDeclaration-0]: index.md#handlerbaseprops
[InterfaceDeclaration-9]: index.md#htmlelementprops
[ClassDeclaration-3]: index/dropdownhandler.md#dropdownhandler
[InterfaceDeclaration-10]: index.md#dropdownheaderprops
[InterfaceDeclaration-9]: index.md#htmlelementprops
[InterfaceDeclaration-4]: index.md#headerbaseprops
[ClassDeclaration-4]: index/dropdownheader.md#dropdownheader
[InterfaceDeclaration-11]: index.md#dropdownsectionprops
[InterfaceDeclaration-9]: index.md#htmlelementprops
[InterfaceDeclaration-6]: index.md#sectionbaseprops
[ClassDeclaration-5]: index/dropdownsection.md#dropdownsection
[InterfaceDeclaration-9]: index.md#htmlelementprops
[InterfaceDeclaration-1]: index.md#classnameprops
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