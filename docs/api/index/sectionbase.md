# Table of contents

* [SectionBase][ClassDeclaration-2]
    * Constructor
        * [constructor(props, context)][Constructor-2]
    * Methods
        * [onSectionClick()][MethodDeclaration-16]
        * [isOpen()][MethodDeclaration-17]
        * [getRestProps(props)][MethodDeclaration-18]
    * Properties
        * [context][PropertyDeclaration-5]
        * [contextTypes][PropertyDeclaration-6]

# SectionBase

```typescript
class SectionBase<TProps = {}, TState = {}>
```

**Type parameters**

| Name   | Default |
| ------ | ------- |
| TProps | {}      |
| TState | {}      |
## Constructor

### constructor(props, context)

```typescript
public constructor(props: TProps, context: SectionBaseContext);
```

**Parameters**

| Name    | Type                                         |
| ------- | -------------------------------------------- |
| props   | TProps                                       |
| context | [SectionBaseContext][InterfaceDeclaration-4] |

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
public context: SectionBaseContext;
```

**Type**

[SectionBaseContext][InterfaceDeclaration-4]

----------

### contextTypes

```typescript
public static contextTypes: ValidationMap<SectionBaseContext>;
```

**Type**

ValidationMap<[SectionBaseContext][InterfaceDeclaration-4]>

[ClassDeclaration-2]: sectionbase.md#sectionbase
[Constructor-2]: sectionbase.md#constructorprops-context
[InterfaceDeclaration-4]: ../index.md#sectionbasecontext
[MethodDeclaration-16]: sectionbase.md#onsectionclick
[MethodDeclaration-17]: sectionbase.md#isopen
[MethodDeclaration-18]: sectionbase.md#getrestpropsprops
[PropertyDeclaration-5]: sectionbase.md#context
[InterfaceDeclaration-4]: ../index.md#sectionbasecontext
[PropertyDeclaration-6]: sectionbase.md#contexttypes
[InterfaceDeclaration-4]: ../index.md#sectionbasecontext