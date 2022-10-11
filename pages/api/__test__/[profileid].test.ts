import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

import userProfile from '../profile/[id]';


//Mocking some used Auth0 methods to bypass Auth0.
jest.mock("@auth0/nextjs-auth0", () => ({
    withApiAuthRequired: jest.fn().mockImplementation((component, ignore) => component),
    getAccessToken: jest.fn().mockImplementation((component, ignore) => component)
}))


//seperate file i have to mcok some user data.
const mockUser = require('./mockuser.json')

//Using the mocked user data and mocking fetching the data.
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockUser)
})) as jest.Mock;

//start testing
describe('/api/profile/[ID] API Endpoint', () => {

    //using CreateMocks from node-mocks-http to mock RES and REQ
    function mockRequestResponse(method: RequestMethod = 'GET') {
        const {
            req,
            res,
        }: { req: NextApiRequest; res: NextApiResponse } = createMocks({ method });
        req.query = { id: '8' }
        return { req, res };
    }

    //Testing our dummy data.
    it('Uses dev data', async () => {
        const { req, res } = mockRequestResponse();
        await userProfile(req, res);

        expect(res.statusCode).toBe(200);
        expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
        expect(res.statusMessage).toEqual('OK');
    });

    //testing the data provided by us, while also bypassing auth0 using mocks.
    it('Uses the proxy server', async () => {
        //setting apihost for the if statement
        process.env.API_HOST = "something";
        const { req, res } = mockRequestResponse();
        await userProfile(req, res);

        expect(res.statusCode).toBe(200);
        expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
        expect(res.statusMessage).toEqual('OK');
    })


});