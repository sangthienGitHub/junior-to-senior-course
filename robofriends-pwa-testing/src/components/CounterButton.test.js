import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("expect to render Card List component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});
