import React, { useState } from "react";
import { render } from "react-testing-library";

import "jest-dom/extend-expect";

function Foo(): JSX.Element {
    const [count] = useState(0);

    return <div>{count}</div>;
}

it("success", () => {
    const { container } = render(<Foo />);
    const a = container.firstChild!;

    expect(a.textContent).toBe("0");
});
