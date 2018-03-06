import * as React from "react";
import { mount } from "enzyme";

import { HandlerBaseState } from "../../abstractions/handler-base";
import { DropdownHandler } from "../dropdown-handler";
import { DropdownHeader } from "../dropdown-header";
import { DropdownSection } from "../dropdown-section";

it("default", () => {
    const dropdown = mount(
        <DropdownHandler>
            <DropdownHeader id="header">Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    dropdown.find("div#header").simulate("click");

    const handlerState: HandlerBaseState = dropdown.state();
    expect(handlerState.open).toBe(true);
});
