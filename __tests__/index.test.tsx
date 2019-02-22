import "jest-dom/extend-expect";

import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import { DropdownHandler } from "../src/components/dropdown-handler";
import { DropdownHeader } from "../src/components/dropdown-header";
import { DropdownSection } from "../src/components/dropdown-section";

afterEach(cleanup);

it("opens when clicked on header.", () => {
    const dropdown = render(
        <DropdownHandler>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    const header = dropdown.getByText("Header");
    fireEvent.click(header);

    expect(dropdown.getByText("Section")).toBeDefined();
});

it("closes when clicked on section when closeOnSectionClick is true.", () => {
    const dropdown = render(
        <DropdownHandler defaultIsOpen={true} closeOnSectionClick={true}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    const section = dropdown.getByText("Section");
    fireEvent.click(section);

    expect(() => dropdown.getByText("Section")).toThrow();
});

it("does not open when clicked on header if handler is controlled.", () => {
    const dropdown = render(
        <DropdownHandler isOpen={false}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    const header = dropdown.getByText("Header");
    fireEvent.click(header);

    expect(() => dropdown.getByText("Section")).toThrow();
});

it("does not open when clicked on header if dropdown is disabled.", () => {
    const dropdown = render(
        <DropdownHandler disabled={true}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    const header = dropdown.getByText("Header");
    fireEvent.click(header);

    expect(() => dropdown.getByText("Section")).toThrow();
});

it("does not trigger callback when clicked on header if dropdown is disabled.", () => {
    const stub = jest.fn();
    const dropdown = render(
        <DropdownHandler disabled={true} onToggle={stub}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    const header = dropdown.getByText("Header");
    fireEvent.click(header);

    expect(stub).not.toBeCalled();
});

it("closedClassName is added when dropdown is closed.", () => {
    const closedClassName = "closed-class-name";

    const dropdown = render(
        <DropdownHandler closedClassName={closedClassName}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    expect(dropdown.container.firstChild).toHaveClass(closedClassName);
});

it("openClassName is added when dropdown is closed.", () => {
    const openClassName = "open-class-name";

    const dropdown = render(
        <DropdownHandler defaultIsOpen={true} openClassName={openClassName}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    expect(dropdown.container.firstChild).toHaveClass(openClassName);
});

it("openClassName is added to className when dropdown is opened.", () => {
    const className = "dropdown-handler";
    const openClassName = "open-class-name";

    const dropdown = render(
        <DropdownHandler defaultIsOpen={true} className={className} openClassName={openClassName}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    expect(dropdown.container.firstChild).toHaveClass(className, openClassName);
});

it("simple controlled dropdown", () => {
    const dropdown = render(
        <DropdownHandler isOpen={true}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );

    expect(dropdown.getByText("Section")).toBeDefined();

    dropdown.rerender(
        <DropdownHandler isOpen={false}>
            <DropdownHeader>Header</DropdownHeader>
            <DropdownSection>Section</DropdownSection>
        </DropdownHandler>
    );
    expect(() => dropdown.getByText("Section")).toThrow();
});

it("dropdown is closed when clicked outside", () => {
    const dropdown = render(
        <>
            <DropdownHandler defaultIsOpen={true}>
                <DropdownHeader>Header</DropdownHeader>
                <DropdownSection>Section</DropdownSection>
            </DropdownHandler>
            <div>Outside</div>
        </>
    );

    const outside = dropdown.getByText("Outside");
    fireEvent.click(outside);

    expect(() => dropdown.getByText("Section")).toThrow();
});
