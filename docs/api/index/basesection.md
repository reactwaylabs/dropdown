# Table of contents

* [BaseSection][ClassDeclaration-2]
    * Constructor
        * [constructor(props, context)][Constructor-2]
    * Methods
        * [onSectionClick()][MethodDeclaration-8]
        * [isOpen()][MethodDeclaration-9]
    * Properties
        * [context][PropertyDeclaration-3]
        * [contextTypes][PropertyDeclaration-4]

# BaseSection

```typescript
class BaseSection<TProps extends BaseSectionProps, TState extends BaseSectionState>
```

**Type parameters**

| Name   | Constraint                                 |
| ------ | ------------------------------------------ |
| TProps | [BaseSectionProps][InterfaceDeclaration-6] |
| TState | [BaseSectionState][InterfaceDeclaration-7] |
## Constructor

### constructor(props, context)

```typescript
public constructor(props: TProps, context: BaseSectionContext);
```

**Parameters**

| Name    | Type                                         |
| ------- | -------------------------------------------- |
| props   | TProps                                       |
| context | [BaseSectionContext][InterfaceDeclaration-8] |

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

## Properties

### context

```typescript
public context: BaseSectionContext;
```

**Type**

[BaseSectionContext][InterfaceDeclaration-8]

----------

### contextTypes

```typescript
public static contextTypes: ValidationMap<BaseSectionContext>;
```

**Type**

ValidationMap<[BaseSectionContext][InterfaceDeclaration-8]>

[ClassDeclaration-2]: basesection.md#basesection
[InterfaceDeclaration-6]: ../index.md#basesectionprops
[InterfaceDeclaration-7]: ../index.md#basesectionstate
[Constructor-2]: basesection.md#constructorprops-context
[InterfaceDeclaration-8]: ../index.md#basesectioncontext
[MethodDeclaration-8]: basesection.md#onsectionclick
[MethodDeclaration-9]: basesection.md#isopen
[PropertyDeclaration-3]: basesection.md#context
[InterfaceDeclaration-8]: ../index.md#basesectioncontext
[PropertyDeclaration-4]: basesection.md#contexttypes
[InterfaceDeclaration-8]: ../index.md#basesectioncontext