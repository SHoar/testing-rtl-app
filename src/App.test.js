import { render,  screen, waitFor, wait, within, fireEvent, act, rerender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateRangePicker } from 'react-dates';
import App from './App';
import moment from 'moment';
const debug = screen.debug;

// test.skip('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('showing Calendar', () => {
  jest.setTimeout(20000)

  test('can see start/end date inputs', () => {
    render(<App />);

    const picker = screen.getByText(/Pick a Date:/i)
    expect(picker.innerHTML).toBe('Pick a Date:');

    const calendarStartInput = screen.getByRole('textbox', { name: "Start Date" })
    const calendarEndInput = screen.getByRole('textbox', { name: "End Date" })

    expect(calendarStartInput).toHaveDisplayValue(moment().format("MM/DD/YYYY"))
    expect(calendarEndInput).toHaveDisplayValue(moment().format("MM/DD/YYYY"))
  })
  test('can open calendar', async () => {
    const { getByRole, getByTestId, rerender } = render(<App />);
    
    const drp = getByTestId('CalendarPicker')
    const calendarStartInput = getByRole('textbox', { name: "Start Date" })
    const calendarEndInput = getByRole('textbox', { name: "End Date" })
    act(() => {
      userEvent.click(calendarStartInput)
      rerender(<App />);
      let result = await waitFor(() => screen.getByText("May 2022"))
      console.log( result)

      expect(screen.queryByText("May 2022")).toBeDefined()
    })
  })
});