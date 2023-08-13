import { getAllByRole, getByRole, render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Occasion");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns expected array', () => {
  render(<BookingPage />);
  const timeOptions = screen.getAllByRole("option");
  expect(timeOptions.length == 6);
})

test('updateTimes returns the same value provided in the state', () => {
  render(<BookingPage />);
  const timeOptions = screen.getAllByRole("option");
  expect(timeOptions.length == 6);
})