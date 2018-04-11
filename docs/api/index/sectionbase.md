# Table of contents

* [SectionBase][ClassDeclaration-2]
    * Constructor
        * [constructor(props, context)][Constructor-2]
    * Methods
        * [onSectionClick()][MethodDeclaration-19]
        * [isOpen()][MethodDeclaration-20]
        * [isDisabled()][MethodDeclaration-21]
        * [getRestProps(props)][MethodDeclaration-22]
        * [getClassName(props)][MethodDeclaration-23]
    * Properties
        * [context][PropertyDeclaration-5]
        * [contextTypes][PropertyDeclaration-6]

# SectionBase

```typescript
class SectionBase<TProps extends SectionBaseProps = {}, TState = {}>
```

**Type parameters**

| Name   | Constraint                                 | Default |
| ------ | ------------------------------------------ | ------- |
| TProps | [SectionBaseProps][InterfaceDeclaration-6] | {}      |
| TState |                                            | {}      |
## Constructor

### constructor(props, context)

```typescript
public constructor(props: TProps, context: SectionBaseContext);
```

**Parameters**

| Name    | Type                                         |
| ------- | -------------------------------------------- |
| props   | TProps                                       |
| context | [SectionBaseContext][InterfaceDeclaration-7] |

## Methods

### onSectionClick()

This callback MUST be called when container element is clicked.

```typescript
protected onSectionClick(): void;
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
protected getRestProps(props: SectionBaseProps): {};
```

**Parameters**

| Name  | Type                                       |
| ----- | ------------------------------------------ |
| props | [SectionBaseProps][InterfaceDeclaration-6] |

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
public context: SectionBaseContext;
```

**Type**

[SectionBaseContext][InterfaceDeclaration-7]

----------

### contextTypes

```typescript
public static contextTypes: ValidationMap<SectionBaseContext>;
```

**Type**

ValidationMap<[SectionBaseContext][InterfaceDeclaration-7]>

[ClassDeclaration-2]: sectionbase.md#sectionbase
[InterfaceDeclaration-6]: ../index.md#sectionbaseprops
[Constructor-2]: sectionbase.md#constructorprops-context
[InterfaceDeclaration-7]: ../index.md#sectionbasecontext
[MethodDeclaration-19]: sectionbase.md#onsectionclick
[MethodDeclaration-20]: sectionbase.md#isopen
[MethodDeclaration-21]: sectionbase.md#isdisabled
[MethodDeclaration-22]: sectionbase.md#getrestpropsprops
[InterfaceDeclaration-6]: ../index.md#sectionbaseprops
[MethodDeclaration-23]: sectionbase.md#getclassnameprops
[InterfaceDeclaration-1]: ../index.md#classnameprops
[PropertyDeclaration-5]: sectionbase.md#context
[InterfaceDeclaration-7]: ../index.md#sectionbasecontext
[PropertyDeclaration-6]: sectionbase.md#contexttypes
[InterfaceDeclaration-7]: ../index.md#sectionbasecontext