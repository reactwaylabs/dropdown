# Table of contents

* [HandlerBase][ClassDeclaration-0]
    * Constructor
        * [constructor(props)][Constructor-0]
    * Methods
        * [getInitialOpenValue()][MethodDeclaration-0]
        * [onOutsideClick(event)][MethodDeclaration-1]
        * [isElementInContainer(element)][MethodDeclaration-2]
        * [triggerCallbacks(open, source)][MethodDeclaration-3]
        * [updateOpenState(open)][MethodDeclaration-4]
        * [isControlled()][MethodDeclaration-5]
    * Properties
        * [element][PropertyDeclaration-0]

# HandlerBase

```typescript
abstract class HandlerBase<TProps extends HandlerBaseProps, TState extends HandlerBaseState>
```

**Type parameters**

| Name   | Constraint                                 |
| ------ | ------------------------------------------ |
| TProps | [HandlerBaseProps][InterfaceDeclaration-0] |
| TState | [HandlerBaseState][InterfaceDeclaration-1] |
## Constructor

### constructor(props)

```typescript
public constructor(props: TProps);
```

**Parameters**

| Name  | Type   |
| ----- | ------ |
| props | TProps |

## Methods

### getInitialOpenValue()

Initial open state value.
By default it gets initial value from props: defaultOpen and open.

```typescript
protected getInitialOpenValue(): boolean;
```

**Return type**

boolean

----------

### onOutsideClick(event)

Handles window click event.

```typescript
protected onOutsideClick(event: MouseEvent): void;
```

**Parameters**

| Name  | Type       |
| ----- | ---------- |
| event | MouseEvent |

**Return type**

void

----------

### isElementInContainer(element)

Checks if passed element is in container element.

```typescript
protected isElementInContainer(element: Element): boolean;
```

**Parameters**

| Name    | Type    |
| ------- | ------- |
| element | Element |

**Return type**

boolean

----------

### triggerCallbacks(open, source)

Triggers all callbacks: onOpen, onClose and onToggle.

```typescript
protected triggerCallbacks(open: boolean, source: EventSource): void;
```

**Parameters**

| Name   | Type                             |
| ------ | -------------------------------- |
| open   | boolean                          |
| source | [EventSource][EnumDeclaration-0] |

**Return type**

void

----------

### updateOpenState(open)

Updates state if dropdown is not controlled.

```typescript
protected updateOpenState(open: boolean): void;
```

**Parameters**

| Name | Type    |
| ---- | ------- |
| open | boolean |

**Return type**

void

----------

### isControlled()

Return true if dropdown is controlled outside of this component.

```typescript
protected isControlled(): boolean;
```

**Return type**

boolean

## Properties

### element

Container element.

```typescript
public abstract element: HTMLElement | null;
```

**Type**

HTMLElement | null

[ClassDeclaration-0]: handlerbase.md#handlerbase
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[InterfaceDeclaration-1]: ../index.md#handlerbasestate
[Constructor-0]: handlerbase.md#constructorprops
[MethodDeclaration-0]: handlerbase.md#getinitialopenvalue
[MethodDeclaration-1]: handlerbase.md#onoutsideclickevent
[MethodDeclaration-2]: handlerbase.md#iselementincontainerelement
[MethodDeclaration-3]: handlerbase.md#triggercallbacksopen-source
[EnumDeclaration-0]: ../index.md#eventsource
[MethodDeclaration-4]: handlerbase.md#updateopenstateopen
[MethodDeclaration-5]: handlerbase.md#iscontrolled
[PropertyDeclaration-0]: handlerbase.md#element