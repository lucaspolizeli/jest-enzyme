import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
});
