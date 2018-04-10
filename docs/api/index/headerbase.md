# Table of contents

* [HeaderBase][ClassDeclaration-1]
    * Constructor
        * [constructor(props, context)][Constructor-1]
    * Methods
        * [onHeaderClick()][MethodDeclaration-14]
        * [isOpen()][MethodDeclaration-15]
        * [isDisabled()][MethodDeclaration-16]
        * [getRestProps(props)][MethodDeclaration-17]
        * [getClassName(props)][MethodDeclaration-18]
    * Properties
        * [context][PropertyDeclaration-3]
        * [contextTypes][PropertyDeclaration-4]

# HeaderBase

```typescript
class HeaderBase<TProps extends HeaderBaseProps = {}, TState = {}>
```

**Type parameters**

| Name   | Constraint                                | Default |
| ------ | ----------------------------------------- | ------- |
| TProps | [HeaderBaseProps][InterfaceDeclaration-4] | {}      |
| TState |                                           | {}      |
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

### isDisabled()

```typescript
protected isDisabled(): boolean;
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
| props | [HeaderBaseProps][InterfaceDeclaration-4] |

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
[InterfaceDeclaration-4]: ../index.md#headerbaseprops
[Constructor-1]: headerbase.md#constructorprops-context
[InterfaceDeclaration-5]: ../index.md#headerbasecontext
[MethodDeclaration-14]: headerbase.md#onheaderclick
[MethodDeclaration-15]: headerbase.md#isopen
[MethodDeclaration-16]: headerbase.md#isdisabled
[MethodDeclaration-17]: headerbase.md#getrestpropsprops
[InterfaceDeclaration-4]: ../index.md#headerbaseprops
[MethodDeclaration-18]: headerbase.md#getclassnameprops
[InterfaceDeclaration-1]: ../index.md#classnameprops
[PropertyDeclaration-3]: headerbase.md#context
[InterfaceDeclaration-5]: ../index.md#headerbasecontext
[PropertyDeclaration-4]: headerbase.md#contexttypes
[InterfaceDeclaration-5]: ../index.md#headerbasecontext