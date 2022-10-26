import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BasicProfile } from 'ts/interfaces';

import SearchBox from '../search-box';
import mockProfiles from './mock-profiles.json';

const childToParent = jest.fn();

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProfiles),
  })
) as jest.Mock;

//Mocking some used Auth0 methods to bypass Auth0.
// jest.mock('@auth0/nextjs-auth0', () => ({
//   withApiAuthRequired: jest
//     .fn()
//     .mockImplementation((component, ignore) => component),
//   getAccessToken: jest
//     .fn()
//     .mockImplementation((component, ignore) => component),
// }));

// const localStorageMock = (() => {
//   let store: any = {};

//   return {
//     getItem(key: string | number) {
//       return store[key] || null;
//     },
//     setItem(key: string | number, value: { toString: () => any }) {
//       store[key] = value.toString();
//     },
//     removeItem(key: string | number) {
//       delete store[key];
//     },
//     clear() {
//       store = {};
//     },
//   };
// })();

// Object.defineProperty(window, 'sessionStorage', {
//   value: localStorageMock,
// });

describe('SearchBox', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });

  it('should render inactive search box with inactive search icon, placeholder text and disabled submit button when component initially loads', () => {
    render(<SearchBox childToParent={childToParent} />);

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
    render(<SearchBox childToParent={childToParent} />);
    await userEvent.type(screen.getByRole('text'), 't');

    expect(screen.getByText('Search')).toBeEnabled();
    expect(screen.getByTestId('clear search')).toBeTruthy();
  });

  it('should clear input text, retain input focus and disable clear and submit buttons, when clicking clear button', async () => {
    render(<SearchBox childToParent={childToParent} />);
    const inputElement = screen.getByRole('text');
    await userEvent.type(inputElement, 'test@email.com');
    await userEvent.click(screen.getByTestId('clear search'));

    expect((inputElement as HTMLInputElement).value).toBe('');
    expect(screen.queryByTestId('clear search')).toBeNull();
    expect(screen.getByText('Search')).toBeDisabled();
    expect(document.activeElement).toBe(inputElement);
  });

  it('should keep the submit and clear buttons enabled, when focus is removed from search that contains a valid input', async () => {
    render(<SearchBox childToParent={childToParent} />);
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
    render(<SearchBox childToParent={childToParent} />);
    await userEvent.type(screen.getByRole('text'), 'a');
    await userEvent.click(screen.getByText('Search'));

    // const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    // window.sessionStorage.setItem(
    //   'profileSearchResults',
    //   JSON.stringify([
    //     {
    //       employeeId: '1',
    //       email: 'X_MAyra_Hudson@gmail.com',
    //       team: 'DPUS',
    //       country: 'US',
    //       name: 'n/a',
    //       image72:
    //         'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg',
    //       image192:
    //         'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg',
    //       image512:
    //         'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
    //     },
    //     {
    //       employeeId: '2',
    //       email: 'Mary_Hudson@gmail.com',
    //       team: 'DPUS',
    //       country: 'US',
    //       name: 'n/a',
    //       image72:
    //         'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg',
    //       image192:
    //         'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg',
    //       image512:
    //         'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
    //     },
    //   ])
    // );

    // const actualValue =
    ////////////////////////////
    const storedSearchResults: BasicProfile[] = JSON.parse(
      sessionStorage.getItem('profileSearchResults') as string
    );

    console.log(storedSearchResults);

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
