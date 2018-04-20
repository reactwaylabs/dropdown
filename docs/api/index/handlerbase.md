# Table of contents

* [HandlerBase][ClassDeclaration-0]
    * Constructor
        * [constructor(props)][Constructor-0]
    * Methods
        * [getDerivedStateFromProps(nextProps, prevState)][MethodDeclaration-0]
        * [componentWillUnmount()][MethodDeclaration-1]
        * [getChildContext()][MethodDeclaration-2]
        * [getInitialOpenValue()][MethodDeclaration-3]
        * [onHeaderClick()][MethodDeclaration-4]
        * [onSectionClick()][MethodDeclaration-5]
        * [onOutsideClick(event)][MethodDeclaration-6]
        * [isElementInContainer(element)][MethodDeclaration-7]
        * [triggerCallbacks(isOpen, source)][MethodDeclaration-8]
        * [updateOpenState(isOpen)][MethodDeclaration-9]
        * [isControlled()][MethodDeclaration-10]
        * [getRestProps(props)][MethodDeclaration-11]
        * [getClassName(props)][MethodDeclaration-12]
        * [open()][MethodDeclaration-13]
        * [close()][MethodDeclaration-14]
    * Properties
        * [element][PropertyDeclaration-0]
        * [defaultProps][PropertyDeclaration-1]
        * [childContextTypes][PropertyDeclaration-2]
        * [isOpen][GetAccessor-0]

# HandlerBase

```typescript
abstract class HandlerBase<TProps extends HandlerBaseProps = HandlerBaseProps, TState extends HandlerBaseState = HandlerBaseState>
```

**Type parameters**

| Name   | Constraint                                 | Default                                    |
| ------ | ------------------------------------------ | ------------------------------------------ |
| TProps | [HandlerBaseProps][InterfaceDeclaration-0] | [HandlerBaseProps][InterfaceDeclaration-0] |
| TState | [HandlerBaseState][InterfaceDeclaration-2] | [HandlerBaseState][InterfaceDeclaration-2] |
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

### getDerivedStateFromProps(nextProps, prevState)

```typescript
public static getDerivedStateFromProps(nextProps: HandlerBaseProps, prevState: HandlerBaseState): HandlerBaseState;
```

**Parameters**

| Name      | Type                                       |
| --------- | ------------------------------------------ |
| nextProps | [HandlerBaseProps][InterfaceDeclaration-0] |
| prevState | [HandlerBaseState][InterfaceDeclaration-2] |

**Return type**

[HandlerBaseState][InterfaceDeclaration-2]

----------

### componentWillUnmount()

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

```typescript
public componentWillUnmount(): void;
```

**Return type**

void

----------

### getChildContext()

```typescript
public getChildContext(): BaseHandlerChildContext;
```

**Return type**

[BaseHandlerChildContext][InterfaceDeclaration-3]

----------

### getInitialOpenValue()

Initial open state value.
By default it gets initial value from props: defaultOpen and open.

```typescript
protected getInitialOpenValue(): boolean;
```

**Return type**

boolean

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

Handles outside click.

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

### triggerCallbacks(isOpen, source)

Triggers all callbacks: onOpen, onClose and onToggle.

```typescript
protected triggerCallbacks(isOpen: boolean, source: EventSource): void;
```

**Parameters**

| Name   | Type                             |
| ------ | -------------------------------- |
| isOpen | boolean                          |
| source | [EventSource][EnumDeclaration-0] |

**Return type**

void

----------

### updateOpenState(isOpen)

Updates state if dropdown is not controlled.

```typescript
protected updateOpenState(isOpen: boolean): void;
```

**Parameters**

| Name   | Type    |
| ------ | ------- |
| isOpen | boolean |

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

----------

### getClassName(props)

```typescript
protected getClassName(props: ClassNameProps): string;
```

**Parameters**

| Name  | Type                                     |
| ----- | ---------------------------------------- |
| props | [ClassNameProps][InterfaceDeclaration-1] |

**Return type**

string

----------

### open()

To open dropdown.

```typescript
public open(): void;
```

**Return type**

void

----------

### close()

To close dropdown.

```typescript
public close(): void;
```

**Return type**

void

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

ValidationMap<[BaseHandlerChildContext][InterfaceDeclaration-3]>

----------

### isOpen

Is dropdown open.

```typescript
public get isOpen: boolean;
```

**Type**

boolean

[ClassDeclaration-0]: handlerbase.md#handlerbase
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[InterfaceDeclaration-2]: ../index.md#handlerbasestate
[InterfaceDeclaration-2]: ../index.md#handlerbasestate
[Constructor-0]: handlerbase.md#constructorprops
[MethodDeclaration-0]: handlerbase.md#getderivedstatefrompropsnextprops-prevstate
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[InterfaceDeclaration-2]: ../index.md#handlerbasestate
[InterfaceDeclaration-2]: ../index.md#handlerbasestate
[MethodDeclaration-1]: handlerbase.md#componentwillunmount
[MethodDeclaration-2]: handlerbase.md#getchildcontext
[InterfaceDeclaration-3]: ../index.md#basehandlerchildcontext
[MethodDeclaration-3]: handlerbase.md#getinitialopenvalue
[MethodDeclaration-4]: handlerbase.md#onheaderclick
[MethodDeclaration-5]: handlerbase.md#onsectionclick
[MethodDeclaration-6]: handlerbase.md#onoutsideclickevent
[MethodDeclaration-7]: handlerbase.md#iselementincontainerelement
[MethodDeclaration-8]: handlerbase.md#triggercallbacksisopen-source
[EnumDeclaration-0]: ../index.md#eventsource
[MethodDeclaration-9]: handlerbase.md#updateopenstateisopen
[MethodDeclaration-10]: handlerbase.md#iscontrolled
[MethodDeclaration-11]: handlerbase.md#getrestpropsprops
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[MethodDeclaration-12]: handlerbase.md#getclassnameprops
[InterfaceDeclaration-1]: ../index.md#classnameprops
[MethodDeclaration-13]: handlerbase.md#open
[MethodDeclaration-14]: handlerbase.md#close
[PropertyDeclaration-0]: handlerbase.md#element
[PropertyDeclaration-1]: handlerbase.md#defaultprops
[InterfaceDeclaration-0]: ../index.md#handlerbaseprops
[PropertyDeclaration-2]: handlerbase.md#childcontexttypes
[InterfaceDeclaration-3]: ../index.md#basehandlerchildcontext
[GetAccessor-0]: handlerbase.md#isopen