# Table of contents

* [SectionBase][ClassDeclaration-2]
    * Constructor
        * [constructor(props, context)][Constructor-2]
    * Methods
        * [onSectionClick()][MethodDeclaration-20]
        * [isOpen()][MethodDeclaration-21]
        * [isDisabled()][MethodDeclaration-22]
        * [getRestProps(props)][MethodDeclaration-23]
        * [getClassName(props)][MethodDeclaration-24]
    * Properties
        * [element][PropertyDeclaration-6]
        * [context][PropertyDeclaration-7]
        * [contextTypes][PropertyDeclaration-8]

# SectionBase

```typescript
abstract class SectionBase<TProps extends SectionBaseProps = {}, TState = {}>
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

### element

Container element.

```typescript
public abstract element: HTMLElement | null;
```

**Type**

HTMLElement | null

----------

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
[MethodDeclaration-20]: sectionbase.md#onsectionclick
[MethodDeclaration-21]: sectionbase.md#isopen
[MethodDeclaration-22]: sectionbase.md#isdisabled
[MethodDeclaration-23]: sectionbase.md#getrestpropsprops
[InterfaceDeclaration-6]: ../index.md#sectionbaseprops
[MethodDeclaration-24]: sectionbase.md#getclassnameprops
[InterfaceDeclaration-1]: ../index.md#classnameprops
[PropertyDeclaration-6]: sectionbase.md#element
[PropertyDeclaration-7]: sectionbase.md#context
[InterfaceDeclaration-7]: ../index.md#sectionbasecontext
[PropertyDeclaration-8]: sectionbase.md#contexttypes
[InterfaceDeclaration-7]: ../index.md#sectionbasecontext