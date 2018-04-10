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
    expect(handlerState.isOpen).toBe(true);
});

it("closes when clicked on section when closeOnSectionClick is true.", () => {
    const dropdown = mount(
        <DropdownHandler defaultIsOpen={true} closeOnSectionClick={true}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection id="section">Section</DropdownSection>
        </DropdownHandler>
    );
    dropdown.find("div#section").simulate("click");

    const handlerState: HandlerBaseState = dropdown.state();
    expect(handlerState.isOpen).toBe(false);
});

it("throws an error when header is not inside handler component.", () => {
    expect(() => shallow(<DropdownHeader />)).toThrowError();
});

it("throws an error when section is not inside handler component.", () => {
    expect(() => shallow(<DropdownSection />)).toThrowError();
});

it("does not open when clicked on header if handler is controlled.", () => {
    const dropdown = mount(
        <DropdownHandler isOpen={false}>
            <DropdownHeader id="header">Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    dropdown.find("div#header").simulate("click");

    const handlerState: HandlerBaseState = dropdown.state();
    expect(handlerState.isOpen).toBe(false);
});

it("does not open when clicked on header if dropdown is disabled.", () => {
    const dropdown = mount(
        <DropdownHandler disabled={true}>
            <DropdownHeader id="header">Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    dropdown.find("div#header").simulate("click");

    const handlerState: HandlerBaseState = dropdown.state();
    expect(handlerState.isOpen).toBe(false);
});

it("does not trigger callback when clicked on header if dropdown is disabled.", () => {
    const stub = jest.fn();
    const dropdown = mount(
        <DropdownHandler disabled={true} onToggle={stub}>
            <DropdownHeader id="header">Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    dropdown.find("div#header").simulate("click");

    const handlerState: HandlerBaseState = dropdown.state();
    expect(stub).not.toBeCalled();
});
