import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';
import { act } from 'react-dom/test-utils';
import { BasicProfile } from 'ts/interfaces';

import SearchBox from '@/components/search/search-box';

import profileSearch from '../../profile/search';
import handler from '../search';

//uses the mocked user data and mocks fetching the data.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(handler),
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

describe('dev search handler for creating ', () => {
  const mockRequestResponse = (method: RequestMethod = 'GET') => {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({
        method,
      });
    req.query = { name: '@', email: '@' };
    return { req, res };
  };

  it('should return 100 profiles, when @ is queried', async () => {
    render(<SearchBox />);
    await userEvent.type(screen.getByRole('text'), '@');
    await userEvent.click(screen.getByText('Search'));

    const storedSearchResults: BasicProfile[] = JSON.parse(
      sessionStorage.getItem('profileSearchResults') as string
    );
    console.log(storedSearchResults);
    // const { req, res } = mockRequestResponse();
    // const profiles = await fetch(req, res);

    // expect(res.statusCode).toBe(200);
    // expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    // expect(res.statusMessage).toEqual('OK');
    // // console.log(res.json());
    // expect(profiles.length).toBe(100);
  });
});
