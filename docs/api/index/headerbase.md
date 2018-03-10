# Table of contents

* [HeaderBase][ClassDeclaration-1]
    * Constructor
        * [constructor(props, context)][Constructor-1]
    * Methods
        * [onHeaderClick()][MethodDeclaration-13]
        * [isOpen()][MethodDeclaration-14]
        * [getRestProps(props)][MethodDeclaration-15]
    * Properties
        * [context][PropertyDeclaration-3]
        * [contextTypes][PropertyDeclaration-4]

# HeaderBase

```typescript
class HeaderBase<TProps = {}, TState = {}>
```

**Type parameters**

| Name   | Default |
| ------ | ------- |
| TProps | {}      |
| TState | {}      |
## Constructor

### constructor(props, context)

```typescript
public constructor(props: TProps, context: HeaderBaseContext);
```

**Parameters**

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| props   | TProps                                      |
| context | [HeaderBaseContext][InterfaceDeclaration-3] |

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
protected getRestProps(props: TProps): {};
```

**Parameters**

| Name  | Type   |
| ----- | ------ |
| props | TProps |

**Return type**

{}

## Properties

### context

```typescript
public context: HeaderBaseContext;
```

**Type**

[HeaderBaseContext][InterfaceDeclaration-3]

----------

### contextTypes

```typescript
public static contextTypes: ValidationMap<HeaderBaseContext>;
```

**Type**

ValidationMap<[HeaderBaseContext][InterfaceDeclaration-3]>

[ClassDeclaration-1]: headerbase.md#headerbase
[Constructor-1]: headerbase.md#constructorprops-context
[InterfaceDeclaration-3]: ../index.md#headerbasecontext
[MethodDeclaration-13]: headerbase.md#onheaderclick
[MethodDeclaration-14]: headerbase.md#isopen
[MethodDeclaration-15]: headerbase.md#getrestpropsprops
[PropertyDeclaration-3]: headerbase.md#context
[InterfaceDeclaration-3]: ../index.md#headerbasecontext
[PropertyDeclaration-4]: headerbase.md#contexttypes
[InterfaceDeclaration-3]: ../index.md#headerbasecontext