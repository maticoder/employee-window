import React from "react";
import Window from "./Window";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    shallow(<Window />);
});
