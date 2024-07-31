// src/__tests__/Counter.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Counter from "./counter";
import { increment, decrement } from "../Redux/actions/actionCounter";

// Create a mock store
const mockStore = configureStore([]);

describe("Counter Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      count: { count: 0 }, // Provide initial state for the store
    });

    // Mock the dispatch function
    store.dispatch = jest.fn();
  });

  test("renders with initial state", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Check if the component renders the initial count correctly
    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: 0");
  });

  test("dispatches increment action on + button click", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Simulate button click
    fireEvent.click(screen.getByText("+"));

    // Verify that the dispatch function was called with the increment action
    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });

  test("dispatches decrement action on - button click", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Simulate button click
    fireEvent.click(screen.getByText("-"));

    // Verify that the dispatch function was called with the decrement action
    expect(store.dispatch).toHaveBeenCalledWith(decrement());
  });
});
