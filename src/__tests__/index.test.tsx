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

it("closedClassName is added when dropdown is closed.", () => {
    const closedClassName = "closed-class-name";

    const dropdown = mount(
        <DropdownHandler closedClassName={closedClassName} id="handler">
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    const handlerElement = dropdown.find("div#handler").get(0);
    expect((handlerElement.props as React.HTMLAttributes<HTMLDivElement>).className).toBe(closedClassName);
});

it("openClassName is added when dropdown is closed.", () => {
    const openClassName = "open-class-name";

    const dropdown = mount(
        <DropdownHandler defaultIsOpen={true} openClassName={openClassName} id="handler">
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    const handlerElement = dropdown.find("div#handler").get(0);
    expect((handlerElement.props as React.HTMLAttributes<HTMLDivElement>).className).toBe(openClassName);
});

it("openClassName is added to className when dropdown is opened.", () => {
    const className = "dropdown-handler";
    const openClassName = "open-class-name";

    const dropdown = mount(
        <DropdownHandler defaultIsOpen={true} className={className} openClassName={openClassName} id="handler">
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    const handlerElement = dropdown.find("div#handler").get(0);
    const handlerClassName = (handlerElement.props as React.HTMLAttributes<HTMLDivElement>).className;
    expect(handlerClassName).toBeDefined();

    const classNames = handlerClassName!.split(" ");
    expect(classNames.indexOf(className)).not.toBe(-1);
    expect(classNames.indexOf(openClassName)).not.toBe(-1);
});

it("simple controlled dropdown", () => {
    const dropdown = mount(
        <DropdownHandler isOpen={true}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    expect(dropdown.state().isOpen).toBe(true);
    dropdown.setProps({ isOpen: false });
    expect(dropdown.state().isOpen).toBe(false);
});
