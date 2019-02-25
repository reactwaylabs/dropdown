# Table of contents

* [index.ts][SourceFile-0]
    * Functions
        * [useDropdownHandler][FunctionDeclaration-0]
        * [useDropdownOpenState][FunctionDeclaration-1]
        * [useKeyboardKeyUp][FunctionDeclaration-2]
        * [useWindowClick][FunctionDeclaration-3]
    * Interfaces
        * [DropdownHandlerProps][InterfaceDeclaration-0]
        * [DropdownHeaderProps][InterfaceDeclaration-3]
        * [DropdownSectionProps][InterfaceDeclaration-4]
        * [DropdownHandlerOptions][InterfaceDeclaration-2]
        * [DropdownHandlerResult][InterfaceDeclaration-5]
        * [DropdownContextDto][InterfaceDeclaration-6]
        * [ClassNameProps][InterfaceDeclaration-1]
    * Types
        * [OpenStateUpdater][TypeAliasDeclaration-2]
        * [DropdownOnToggleHandler][TypeAliasDeclaration-0]
        * [RequiredUndefined][TypeAliasDeclaration-1]
    * Enums
        * [DropdownEventSource][EnumDeclaration-0]
    * Variables
        * [DropdownHandler][VariableDeclaration-0]
        * [DropdownHeader][VariableDeclaration-1]
        * [DropdownSection][VariableDeclaration-2]
        * [DropdownContext][VariableDeclaration-3]

# index.ts

## Functions

### useDropdownHandler

```typescript
function useDropdownHandler(options: RequiredUndefined<DropdownHandlerOptions>): DropdownHandlerResult;
```

**Parameters**

| Name    | Type                                                                                          |
| ------- | --------------------------------------------------------------------------------------------- |
| options | [RequiredUndefined][TypeAliasDeclaration-1]<[DropdownHandlerOptions][InterfaceDeclaration-2]> |

**Return type**

[DropdownHandlerResult][InterfaceDeclaration-5]

----------

### useDropdownOpenState

```typescript
function useDropdownOpenState(isOpen: boolean | undefined = undefined, defaultIsOpen: boolean = false): [boolean, Dispatch];
```

**Parameters**

| Name          | Type                     | Default value |
| ------------- | ------------------------ | ------------- |
| isOpen        | boolean &#124; undefined | undefined     |
| defaultIsOpen | boolean                  | false         |

**Return type**

[boolean, Dispatch]

----------

### useKeyboardKeyUp

```typescript
function useKeyboardKeyUp(callback: (event: KeyboardEvent) => void): void;
```

**Parameters**

| Name     | Type                           |
| -------- | ------------------------------ |
| callback | (event: KeyboardEvent) => void |

**Return type**

void

----------

### useWindowClick

```typescript
function useWindowClick(callback: (event: MouseEvent) => void): void;
```

**Parameters**

| Name     | Type                        |
| -------- | --------------------------- |
| callback | (event: MouseEvent) => void |

**Return type**

void

## Interfaces

### DropdownHandlerProps

```typescript
interface DropdownHandlerProps extends ClassNameProps, Partial<DropdownHandlerOptions> {
    children?: ReactNode;
    toggleOnHeaderClick?: boolean | undefined;
    closeOnSectionClick?: boolean | undefined;
}
```

**Extends**

[ClassNameProps][InterfaceDeclaration-1]

Partial<[DropdownHandlerOptions][InterfaceDeclaration-2]>

**Properties**

| Name                | Type                     | Optional |
| ------------------- | ------------------------ | -------- |
| children            | ReactNode                | true     |
| toggleOnHeaderClick | boolean &#124; undefined | true     |
| closeOnSectionClick | boolean &#124; undefined | true     |

----------

### DropdownHeaderProps

```typescript
interface DropdownHeaderProps extends ClassNameProps {
    children?: ReactNode;
}
```

**Extends**

[ClassNameProps][InterfaceDeclaration-1]

**Properties**

| Name     | Type      | Optional |
| -------- | --------- | -------- |
| children | ReactNode | true     |

----------

### DropdownSectionProps

```typescript
interface DropdownSectionProps extends ClassNameProps {
    children?: ReactNode;
}
```

**Extends**

[ClassNameProps][InterfaceDeclaration-1]

**Properties**

| Name     | Type      | Optional |
| -------- | --------- | -------- |
| children | ReactNode | true     |

----------

### DropdownHandlerOptions

```typescript
interface DropdownHandlerOptions {
    defaultIsOpen: boolean;
    isOpen: boolean;
    onToggle: DropdownOnToggleHandler;
    disabled: boolean;
    closeOnOutsideClick: boolean;
    closeOnEscapeClick: boolean;
}
```

**Properties**

| Name                | Type                                              | Optional |
| ------------------- | ------------------------------------------------- | -------- |
| defaultIsOpen       | boolean                                           | false    |
| isOpen              | boolean                                           | false    |
| onToggle            | [DropdownOnToggleHandler][TypeAliasDeclaration-0] | false    |
| disabled            | boolean                                           | false    |
| closeOnOutsideClick | boolean                                           | false    |
| closeOnEscapeClick  | boolean                                           | false    |

----------

### DropdownHandlerResult

```typescript
interface DropdownHandlerResult {
    updateOpenState: (isOpen: boolean, eventSource: DropdownEventSource) => void;
    isOpen: boolean;
    containerRef: RefObject<HTMLElement | undefined>;
}
```

**Properties**

| Name            | Type                                                        | Optional |
| --------------- | ----------------------------------------------------------- | -------- |
| updateOpenState | (isOpen: boolean, eventSource: DropdownEventSource) => void | false    |
| isOpen          | boolean                                                     | false    |
| containerRef    | RefObject<HTMLElement &#124; undefined>                     | false    |

----------

### DropdownContextDto

```typescript
interface DropdownContextDto {
    isOpen: boolean;
    isDisabled: boolean;
    onHeaderClick: () => void;
    onSectionClick: () => void;
}
```

**Properties**

| Name           | Type       | Optional |
| -------------- | ---------- | -------- |
| isOpen         | boolean    | false    |
| isDisabled     | boolean    | false    |
| onHeaderClick  | () => void | false    |
| onSectionClick | () => void | false    |

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

### OpenStateUpdater

```typescript
type OpenStateUpdater = Dispatch<SetStateAction<boolean>>;
```

**Type**

Dispatch<SetStateAction<boolean>>

----------

### DropdownOnToggleHandler

```typescript
type DropdownOnToggleHandler = (isOpen: boolean, source: DropdownEventSource) => void;
```

**Type**

(isOpen: boolean, source: DropdownEventSource) => void

----------

### RequiredUndefined

```typescript
type RequiredUndefined<TT> = {
    [TKey extends keyof TT]: TT[TKey] | undefined
};
```

**Type parameters**

| Name |
| ---- |
| TT   |

**Type**

{ [TKey extends keyof TT]: TT[TKey] | undefined }

## Enums

### DropdownEventSource


```typescript
enum DropdownEventSource {
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

## Variables

### DropdownHandler

```typescript
const DropdownHandler: (_props: DropdownHandlerProps) => Element;
```

**Type**

(_props: DropdownHandlerProps) => Element

----------

### DropdownHeader

```typescript
const DropdownHeader: (props: DropdownHeaderProps) => Element;
```

**Type**

(props: DropdownHeaderProps) => Element

----------

### DropdownSection

```typescript
const DropdownSection: (props: DropdownSectionProps) => Element | null;
```

**Type**

(props: DropdownSectionProps) => Element | null

----------

### DropdownContext

```typescript
const DropdownContext: Context<DropdownContextDto>;
```

**Type**

Context<[DropdownContextDto][InterfaceDeclaration-6]>

[SourceFile-0]: index.md#indexts
[FunctionDeclaration-0]: index.md#usedropdownhandler
[InterfaceDeclaration-2]: index.md#dropdownhandleroptions
[TypeAliasDeclaration-1]: index.md#requiredundefined
[InterfaceDeclaration-5]: index.md#dropdownhandlerresult
[FunctionDeclaration-1]: index.md#usedropdownopenstate
[FunctionDeclaration-2]: index.md#usekeyboardkeyup
[FunctionDeclaration-3]: index.md#usewindowclick
[InterfaceDeclaration-0]: index.md#dropdownhandlerprops
[InterfaceDeclaration-1]: index.md#classnameprops
[InterfaceDeclaration-2]: index.md#dropdownhandleroptions
[InterfaceDeclaration-3]: index.md#dropdownheaderprops
[InterfaceDeclaration-1]: index.md#classnameprops
[InterfaceDeclaration-4]: index.md#dropdownsectionprops
[InterfaceDeclaration-1]: index.md#classnameprops
[InterfaceDeclaration-2]: index.md#dropdownhandleroptions
[TypeAliasDeclaration-0]: index.md#dropdownontogglehandler
[InterfaceDeclaration-5]: index.md#dropdownhandlerresult
[InterfaceDeclaration-6]: index.md#dropdowncontextdto
[InterfaceDeclaration-1]: index.md#classnameprops
[TypeAliasDeclaration-2]: index.md#openstateupdater
[TypeAliasDeclaration-0]: index.md#dropdownontogglehandler
[TypeAliasDeclaration-1]: index.md#requiredundefined
[EnumDeclaration-0]: index.md#dropdowneventsource
[VariableDeclaration-0]: index.md#dropdownhandler
[VariableDeclaration-1]: index.md#dropdownheader
[VariableDeclaration-2]: index.md#dropdownsection
[VariableDeclaration-3]: index.md#dropdowncontext
[InterfaceDeclaration-6]: index.md#dropdowncontextdto