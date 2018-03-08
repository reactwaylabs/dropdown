# Table of contents

* [HeaderBase][ClassDeclaration-1]
    * Constructor
        * [constructor(props, context)][Constructor-1]
    * Methods
        * [onHeaderClick()][MethodDeclaration-14]
        * [isOpen()][MethodDeclaration-15]
        * [getRestProps(props)][MethodDeclaration-16]
    * Properties
        * [context][PropertyDeclaration-3]
        * [contextTypes][PropertyDeclaration-4]

# HeaderBase

```typescript
class HeaderBase<TProps extends HeaderBaseProps = {}, TState extends HeaderBaseState = {}>
```

**Type parameters**

| Name   | Constraint                                | Default |
| ------ | ----------------------------------------- | ------- |
| TProps | [HeaderBaseProps][InterfaceDeclaration-3] | {}      |
| TState | [HeaderBaseState][InterfaceDeclaration-4] | {}      |
## Constructor

### constructor(props, context)

```typescript
public constructor(props: TProps, context: HeaderBaseContext);
```

**Parameters**

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| props   | TProps                                      |
| context | [HeaderBaseContext][InterfaceDeclaration-5] |

## Methods

### onHeaderClick()

This callback MUST be called when container element is clicked.

```typescript
protected onHeaderClick(): void;
```

**Return type**

void

----------

### isOpen()

Gets from DropdownHandler if dropdown is open.

```typescript
protected isOpen(): boolean;
```

**Return type**

boolean

----------

### getRestProps(props)

```typescript
protected getRestProps(props: HeaderBaseProps): {};
```

**Parameters**

| Name  | Type                                      |
| ----- | ----------------------------------------- |
| props | [HeaderBaseProps][InterfaceDeclaration-3] |

**Return type**

{}

## Properties

### context

```typescript
public context: HeaderBaseContext;
```

**Type**

[HeaderBaseContext][InterfaceDeclaration-5]

----------

### contextTypes

```typescript
public static contextTypes: ValidationMap<HeaderBaseContext>;
```

**Type**

ValidationMap<[HeaderBaseContext][InterfaceDeclaration-5]>

[ClassDeclaration-1]: headerbase.md#headerbase
[InterfaceDeclaration-3]: ../index.md#headerbaseprops
[InterfaceDeclaration-4]: ../index.md#headerbasestate
[Constructor-1]: headerbase.md#constructorprops-context
[InterfaceDeclaration-5]: ../index.md#headerbasecontext
[MethodDeclaration-14]: headerbase.md#onheaderclick
[MethodDeclaration-15]: headerbase.md#isopen
[MethodDeclaration-16]: headerbase.md#getrestpropsprops
[InterfaceDeclaration-3]: ../index.md#headerbaseprops
[PropertyDeclaration-3]: headerbase.md#context
[InterfaceDeclaration-5]: ../index.md#headerbasecontext
[PropertyDeclaration-4]: headerbase.md#contexttypes
[InterfaceDeclaration-5]: ../index.md#headerbasecontext