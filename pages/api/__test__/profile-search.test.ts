import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

import profileSearch from '../profile/search';
import mockProfiles from './mock-profiles.json';

//mocks used Auth0 methods to bypass Auth0
jest.mock('@auth0/nextjs-auth0', () => ({
  withApiAuthRequired: jest
    .fn()
    .mockImplementation((component, ignore) => component),
  getAccessToken: jest
    .fn()
    .mockImplementation((component, ignore) => component),
}));

//uses the mocked profile data and mocks fetching the data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProfiles),
  })
) as jest.Mock;

describe('/api/profile/search API Endpoint', () => {
  const mockRequestResponse = (method: RequestMethod = 'GET') => {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({
        method,
      });
    req.query = { name: 'anything' };
    return { req, res };
  };

  it('should return positive result, when fetching profiles using dev data', async () => {
    const { req, res } = mockRequestResponse();
    await profileSearch(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return positive result, when fetching profiles using the proxy server, while also bypassing auth0 using mocks', async () => {
    //sets apihost for the if statement to be true
    process.env.API_HOST = 'something';
    const { req, res } = mockRequestResponse();
    await profileSearch(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    expect(res.statusMessage).toEqual('OK');
  });
});
