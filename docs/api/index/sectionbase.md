# Table of contents

* [SectionBase][ClassDeclaration-2]
    * Constructor
        * [constructor(props, context)][Constructor-2]
    * Methods
        * [onSectionClick()][MethodDeclaration-13]
        * [isOpen()][MethodDeclaration-14]
        * [getRestProps(props)][MethodDeclaration-15]
    * Properties
        * [context][PropertyDeclaration-5]
        * [contextTypes][PropertyDeclaration-6]

# SectionBase

```typescript
class SectionBase<TProps extends SectionBaseProps = SectionBaseProps, TState extends SectionBaseState = SectionBaseState>
```

**Type parameters**

| Name   | Constraint                                 | Default                                    |
| ------ | ------------------------------------------ | ------------------------------------------ |
| TProps | [SectionBaseProps][InterfaceDeclaration-6] | [SectionBaseProps][InterfaceDeclaration-6] |
| TState | [SectionBaseState][InterfaceDeclaration-7] | [SectionBaseState][InterfaceDeclaration-7] |
## Constructor

### constructor(props, context)

```typescript
public constructor(props: TProps, context: SectionBaseContext);
```

**Parameters**

| Name    | Type                                         |
| ------- | -------------------------------------------- |
| props   | TProps                                       |
| context | [SectionBaseContext][InterfaceDeclaration-8] |

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

## Properties

### context

```typescript
public context: SectionBaseContext;
```

**Type**

[SectionBaseContext][InterfaceDeclaration-8]

----------

### contextTypes

```typescript
public static contextTypes: ValidationMap<SectionBaseContext>;
```

**Type**

ValidationMap<[SectionBaseContext][InterfaceDeclaration-8]>

[ClassDeclaration-2]: sectionbase.md#sectionbase
[InterfaceDeclaration-6]: ../index.md#sectionbaseprops
[InterfaceDeclaration-6]: ../index.md#sectionbaseprops
[InterfaceDeclaration-7]: ../index.md#sectionbasestate
[InterfaceDeclaration-7]: ../index.md#sectionbasestate
[Constructor-2]: sectionbase.md#constructorprops-context
[InterfaceDeclaration-8]: ../index.md#sectionbasecontext
[MethodDeclaration-13]: sectionbase.md#onsectionclick
[MethodDeclaration-14]: sectionbase.md#isopen
[MethodDeclaration-15]: sectionbase.md#getrestpropsprops
[InterfaceDeclaration-6]: ../index.md#sectionbaseprops
[PropertyDeclaration-5]: sectionbase.md#context
[InterfaceDeclaration-8]: ../index.md#sectionbasecontext
[PropertyDeclaration-6]: sectionbase.md#contexttypes
[InterfaceDeclaration-8]: ../index.md#sectionbasecontext