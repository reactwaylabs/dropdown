# Table of contents

* [HandlerBase][ClassDeclaration-0]
    * Constructor
        * [constructor(props)][Constructor-0]
    * Methods
        * [getInitialOpenValue()][MethodDeclaration-0]
        * [getChildContext()][MethodDeclaration-1]
        * [onHeaderClick()][MethodDeclaration-2]
        * [onSectionClick()][MethodDeclaration-3]
        * [onOutsideClick(event)][MethodDeclaration-4]
        * [isElementInContainer(element)][MethodDeclaration-5]
        * [triggerCallbacks(open, source)][MethodDeclaration-6]
        * [updateOpenState(open)][MethodDeclaration-7]
        * [isControlled()][MethodDeclaration-8]
        * [getRestProps(props)][MethodDeclaration-9]
    * Properties
        * [element][PropertyDeclaration-0]
        * [defaultProps][PropertyDeclaration-1]
        * [childContextTypes][PropertyDeclaration-2]

# HandlerBase

```typescript
abstract class HandlerBase<TProps extends HandlerBaseProps = HandlerBaseProps, TState extends HandlerBaseState = HandlerBaseState>
```

**Type parameters**

| Name   | Constraint                                 | Default                                    |
| ------ | ------------------------------------------ | ------------------------------------------ |
| TProps | [HandlerBaseProps][InterfaceDeclaration-0] | [HandlerBaseProps][InterfaceDeclaration-0] |
| TState | [HandlerBaseState][InterfaceDeclaration-1] | [HandlerBaseState][InterfaceDeclaration-1] |
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

### getChildContext()

```typescript
public getChildContext(): BaseHandlerChildContext;
```

**Return type**

[BaseHandlerChildContext][InterfaceDeclaration-2]

----------

### onHeaderClick()

Triggers this method when header is clicked.

```typescript
protected onHeaderClick(): void;
```

**Return type**

void

----------

### onSectionClick()

Triggers this method when section is clicked.

```typescript
protected onSectionClick(): void;
```

**Return type**

void

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

----------

### getRestProps(props)

```typescript
protected getRestProps(props: HandlerBaseProps): {};
```

**Parameters**

| Name  | Type                                       |
| ----- | ------------------------------------------ |
| props | [HandlerBaseProps][InterfaceDeclaration-0] |

**Return type**

{}

## Properties

### element

Container element.

```typescript
public abstract element: HTMLElement | null;
```

**Type**

HTMLElement | null

----------

### defaultProps

```typescript
public static defaultProps: HandlerBaseProps;
```

**Type**

[HandlerBaseProps][InterfaceDeclaration-0]

----------

### childContextTypes

```typescript
public static childContextTypes: ValidationMap<BaseHandlerChildContext>;
```

**Type**

ValidationMap<[BaseHandlerChildContext][InterfaceDeclaration-2]>

[ClassDeclaration-0]: handlerbase.md#handlerbase
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[InterfaceDeclaration-1]: ../index.md#handlerbasestate
[InterfaceDeclaration-1]: ../index.md#handlerbasestate
[Constructor-0]: handlerbase.md#constructorprops
[MethodDeclaration-0]: handlerbase.md#getinitialopenvalue
[MethodDeclaration-1]: handlerbase.md#getchildcontext
[InterfaceDeclaration-2]: ../index.md#basehandlerchildcontext
[MethodDeclaration-2]: handlerbase.md#onheaderclick
[MethodDeclaration-3]: handlerbase.md#onsectionclick
[MethodDeclaration-4]: handlerbase.md#onoutsideclickevent
[MethodDeclaration-5]: handlerbase.md#iselementincontainerelement
[MethodDeclaration-6]: handlerbase.md#triggercallbacksopen-source
[EnumDeclaration-0]: ../index.md#eventsource
[MethodDeclaration-7]: handlerbase.md#updateopenstateopen
[MethodDeclaration-8]: handlerbase.md#iscontrolled
[MethodDeclaration-9]: handlerbase.md#getrestpropsprops
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[PropertyDeclaration-0]: handlerbase.md#element
[PropertyDeclaration-1]: handlerbase.md#defaultprops
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[PropertyDeclaration-2]: handlerbase.md#childcontexttypes
[InterfaceDeclaration-2]: ../index.md#basehandlerchildcontext