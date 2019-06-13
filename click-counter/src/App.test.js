import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (!state) return wrapper;

  return wrapper.setState(state);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} value - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("clicking button increments counter displayS", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  wrapper.update();

  // Find display and test value
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("clicking button decrements counter displays", () => {
  const counter = 5;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();

  // Find display and test value
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

test("clicking button verify if the state is below 0, and show error", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();

  // Find display and test if exist error.
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter);

  const errorDisplay = findByTestAttr(wrapper, "counter-below-0");
  expect(errorDisplay.length).toBe(1);
});

test("clicking increment, and error is showing, hide error", () => {
  const counter = 0;
  const showError = false;
  const wrapper = setup(null, { counter, showError });

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter);

  expect(wrapper.state().showError).toBeTruthy();

  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  wrapper.update();

  expect(wrapper.state().showError).toBeFalsy();
});
