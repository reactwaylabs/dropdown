import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropdownHandler, DropdownHeader, DropdownSection } from "simplr-dropdown";

import "./app.scss";

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

ReactDOM.render(<App />, document.getElementById("app"));
