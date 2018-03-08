# Examples

## Simple example

```tsx
import { DropdownHandler, DropdownHeader, DropdownSection } from "simplr-dropdown";

export function DropdownMenu(props: {}) {
    return <DropdownHandler>
        <DropdownHeader>
            Profile
        </DropdownHeader>
        <DropdownSection>
            <ul>
                <li>View profile</li>
                <li>Edit profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </DropdownSection>
    </DropdownHandler>;
}
```
