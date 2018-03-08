# Examples

## Simple example

```tsx
export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <DropdownHandler className="dropdown-handler" closeOnSectionClick={true}>
                    <DropdownHeader className="dropdown-header">Profile</DropdownHeader>
                    <DropdownSection className="dropdown-section">
                        <ul>
                            <li>View profile</li>
                            <li>Edit profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </DropdownSection>
                </DropdownHandler>
                Other content
            </div>
        );
    }
}
```

[Codesandbox link](https://github.com/SimplrJS/simplr-dropdown/tree/master/examples/simple-example)
