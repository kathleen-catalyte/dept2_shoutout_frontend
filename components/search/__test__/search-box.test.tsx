import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BasicProfile } from 'ts/interfaces';

import SearchBox from '../search-box';
import mockProfiles from './mock-profiles.json';

//uses the mocked user data and mocks fetching the data.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProfiles),
  })
) as jest.Mock;

//mocks route
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
    };
  },
}));

describe('SearchBox', () => {
  it('should render inactive search box with inactive search icon, placeholder text and disabled submit button when component initially loads', () => {
    render(
      <SearchBox
        childToParent={function (childdata: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(screen.getByTestId('search icon')).toHaveClass(
      'magnifyingGlassInactive'
    );
    expect(screen.getByRole('text')).toHaveAttribute(
      'placeholder',
      'Search for teammates'
    );
    expect(screen.getByText('Search')).toBeDisabled();
  });

  it('should enable clear and submit buttons when inputing at least one character in search box', async () => {
    render(
      <SearchBox
        childToParent={function (childdata: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    await userEvent.type(screen.getByRole('text'), 't');

    expect(screen.getByText('Search')).toBeEnabled();
    expect(screen.getByTestId('clear search')).toBeTruthy();
  });

  it('should clear input text, retain input focus and disable clear and submit buttons, when clicking clear button', async () => {
    render(
      <SearchBox
        childToParent={function (childdata: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    const inputElement = screen.getByRole('text');
    await userEvent.type(inputElement, 'test@email.com');
    await userEvent.click(screen.getByTestId('clear search'));

    expect((inputElement as HTMLInputElement).value).toBe('');
    expect(screen.queryByTestId('clear search')).toBeNull();
    expect(screen.getByText('Search')).toBeDisabled();
    expect(document.activeElement).toBe(inputElement);
  });

  it('should keep the submit and clear buttons enabled, when focus is removed from search that contains a valid input', async () => {
    render(
      <SearchBox
        childToParent={function (childdata: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    const inputElement = screen.getByRole('text');
    await userEvent.type(inputElement, 'test@email.com');
    act(() => {
      inputElement.blur();
    });

    expect(screen.getByText('Search')).toBeEnabled();
    expect(screen.getByTestId('clear search')).toBeTruthy();
    expect(document.activeElement).not.toBe(inputElement);
  });

  it('should return matching object from session storage, when passing search query to handleSubmit', async () => {
    render(
      <SearchBox
        childToParent={function (childData: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    await userEvent.type(screen.getByRole('text'), 'a');
    await userEvent.click(screen.getByText('Search'));

    const storedSearchResults: BasicProfile[] = JSON.parse(
      sessionStorage.getItem('profileSearchResults') as string
    );

    expect(
      storedSearchResults.find((profile) => profile.employeeId === '1')
    ).toMatchObject({
      employeeId: '1',
      email: 'X_MAyra_Hudson@gmail.com',
      team: 'DPUS',
      country: 'US',
      name: 'n/a',
      image72:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg',
      image192:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg',
      image512:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
    });
  });
});
