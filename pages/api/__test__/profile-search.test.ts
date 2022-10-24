import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

import profileSearch from '../profile/search';
import mockProfiles from './mock-profiles.json';

//Mocking some used Auth0 methods to bypass Auth0.
jest.mock('@auth0/nextjs-auth0', () => ({
  withApiAuthRequired: jest
    .fn()
    .mockImplementation((component, ignore) => component),
  getAccessToken: jest
    .fn()
    .mockImplementation((component, ignore) => component),
}));

//Using the mocked profile data and mocking fetching the data.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProfiles),
  })
) as jest.Mock;

//start testing
describe('/api/profile/search API Endpoint', () => {
  //using CreateMocks from node-mocks-http to mock RES and REQ
  const mockRequestResponse = (method: RequestMethod = 'GET') => {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({
        method,
      });
    req.query = { name: 'mar' };
    return { req, res };
  };

  //Testing our dummy data.
  it('Uses dev data', async () => {
    const { req, res } = mockRequestResponse();
    await profileSearch(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    expect(res.statusMessage).toEqual('OK');
  });

  //testing the data provided by us, while also bypassing auth0 using mocks.
  it('Uses the proxy server', async () => {
    //setting apihost for the if statement
    process.env.API_HOST = 'something';
    const { req, res } = mockRequestResponse();
    await profileSearch(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    expect(res.statusMessage).toEqual('OK');
  });
});
