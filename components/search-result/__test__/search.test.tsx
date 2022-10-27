import { fireEvent, screen, waitFor } from '@testing-library/dom'
import Router from 'next/router'
import Home from 'pages';
import { Container, render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import SearchResult from '../search-result';

jest.mock('next/router', () => ({ replace: jest.fn() }))

const childToParent = jest.fn()



//Mocking some used Auth0 methods to bypass Auth0.
jest.mock('@auth0/nextjs-auth0', () => ({
  withApiAuthRequired: jest
    .fn()
    .mockImplementation((component, ignore) => component),
  getAccessToken: jest
    .fn()
    .mockImplementation((component, ignore) => component),
}));

let container: Element | DocumentFragment | null;

const localStorageMock = (() => {
  let store: any = {};

  return {
    getItem(key: string | number) {
      return store[key] || null;
    },
    setItem(key: string | number, value: { toString: () => any }) {
      store[key] = value.toString();
    },
    removeItem(key: string | number) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock,
});

describe('getUserInfo', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container!);
    container = null;
  });
  it('should get user info from session storage', async () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem(
      'profileSearchResults',
      JSON.stringify([
        {
          employeeId: '126',
          email: 'Elian37@gmail.com',
          team: 'DPUS',
          country: 'US',
          name: 'Reginald Cronin',
          image72:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/126.jpg',
          image192:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/326.jpg',
          image512:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg',
        },
        {
          employeeId: '149',
          email: 'Amely.Terry67@hotmail.com',
          team: 'DPUS',
          country: 'US',
          name: 'Ms. Patti Hoeger',
          image72:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/149.jpg',
          image192:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/349.jpg',
          image512:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/549.jpg',
        },
      ])
    );

    act(() => {
      ReactDOM.createRoot(container!).render(
        <SearchResult childToParent={childToParent} />
      );
    });


        act(() => {
            ReactDOM.createRoot(container!).render(<SearchResult childToParent={childToParent} />);
        });

        fireEvent.click(screen.getByTestId('clear'))
        const value = window.sessionStorage.getItem('profileSearchResults')
        await waitFor(() => {
            expect(value).toEqual(null)
        })
    });
  });
  it('should get user info from session storage', async () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem(
      'profileSearchResults',
      JSON.stringify([
        {
          employeeId: '126',
          email: 'Elian37@gmail.com',
          team: 'DPUS',
          country: 'US',
          name: 'Reginald Cronin',
          image72:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/126.jpg',
          image192:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/326.jpg',
          image512:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg',
        },
        {
          employeeId: '149',
          email: 'Amely.Terry67@hotmail.com',
          team: 'DPUS',
          country: 'US',
          name: 'Ms. Patti Hoeger',
          image72:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/149.jpg',
          image192:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/349.jpg',
          image512:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/549.jpg',
        },
      ])
    );

    act(() => {
      ReactDOM.createRoot(container!).render(
        <SearchResult childToParent={childToParent} />
      );
    });
    fireEvent.click(screen.getByTestId('clear'));
    const value = window.sessionStorage.getItem('profileSearchResults');
    await waitFor(() => {
      expect(value).toEqual(null);
    });
  });
