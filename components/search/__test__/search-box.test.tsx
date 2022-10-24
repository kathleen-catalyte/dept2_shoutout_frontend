import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import SearchBox from '../search-box';
import styles from '../SearchBox.module.css';

describe('SearchBox', () => {
  it('renders the search box input with placeholder text and disabled button', () => {
    render(<SearchBox />);

    expect(screen.getByRole('text')).toHaveAttribute(
      'placeholder',
      'Search for teammates'
    );
    expect(screen.getByText('Search')).toBeDisabled();
  });

  it('inputing text in search box enables clear and submit buttons', async () => {
    render(<SearchBox />);
    await userEvent.type(screen.getByRole('text'), 'test@email.com');

    expect(screen.getByText('Search')).toBeEnabled();
    expect(screen.getByTestId('clear search')).toBeTruthy();
  });

  it('clicking clear button clears input text, disables clear button, disables submit button, and retains input focus', async () => {
    render(<SearchBox />);
    const inputElement = screen.getByRole('text');
    await userEvent.type(inputElement, 'test@email.com');
    await userEvent.click(screen.getByTestId('clear search'));

    expect((inputElement as HTMLInputElement).value).toBe('');
    expect(screen.queryByTestId('clear search')).toBeNull();
    expect(screen.getByText('Search')).toBeDisabled();
    expect(document.activeElement).toBe(inputElement);
  });

  it('on blur of search that contains a valid input');
  // it('handles onCLick', () => {
  //   const onClick = jest.fn();
  //   render(<SearchBox />);
  //   const buttonElement = screen.getByText('Search');
  //   fireEvent.click(buttonElement);
  //   expect(onClick).toHaveBeenCalledTimes(1);
  // })
});
