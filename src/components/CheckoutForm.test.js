import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm/>);
  const firstName = screen.getByLabelText(/First Name:/i);
  const lastName= screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);
  const submit = screen.getByRole(/button/);

  userEvent.type(firstName, 'Barktooth');
  userEvent.type(lastName, 'Seer');
  userEvent.type(address, 'Third Treehouse');
  userEvent.type(city, 'Ridgewood');
  userEvent.type(state, 'Dur');
  userEvent.type(zip, '7R33W000');
  userEvent.click(submit);

  const successMessageContainer = screen.getByText(
    /You have ordered some plants/
  );
  const successName = screen.getByText(/Barktooth Seer/);
  const successAddress = screen.getByText(
    /Ridgewood, Dur 7R33W000/
  )
  expect(successMessageContainer).toBeInTheDocument();
  expect(successName).toBeInTheDocument();
  expect(successAddress).toBeInTheDocument();
});
