import * as React from "react";
import { mount, shallow } from "enzyme";

import { HandlerBaseState } from "../abstractions/handler-base";
import { DropdownHandler } from "../components/dropdown-handler";
import { DropdownHeader } from "../components/dropdown-header";
import { DropdownSection } from "../components/dropdown-section";

it("opens when clicked on header.", () => {
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

it("closes when clicked on section when closeOnSectionClick true.", () => {
    const dropdown = mount(
        <DropdownHandler defaultOpen={true} closeOnSectionClick={true}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection id="section">Section</DropdownSection>
        </DropdownHandler>
    );
    dropdown.find("div#section").simulate("click");

    const handlerState: HandlerBaseState = dropdown.state();
    expect(handlerState.open).toBe(false);
});

it("throws error when header is not inside handler component.", () => {
    expect(() => shallow(<DropdownHeader />)).toThrowError();
});

it("throws error when section is not inside handler component.", () => {
    expect(() => shallow(<DropdownSection />)).toThrowError();
});

it("doesn't open when handler is controlled.", () => {
    const dropdown = mount(
        <DropdownHandler open={false}>
            <DropdownHeader id="header">Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    dropdown.find("div#header").simulate("click");

    const handlerState: HandlerBaseState = dropdown.state();
    expect(handlerState.open).toBe(false);
});
