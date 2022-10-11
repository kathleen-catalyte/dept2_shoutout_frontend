import UserProfile from "..";

//seperate file i have to mcok some user data.
const mockUser = require('./mockuser.json')

//Using the mocked user data and mocking fetching the data.
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockUser)
})) as jest.Mock;

describe('Profile Page Test', () => {

    it('renders page', () => {
        <UserProfile id={1} />
    })

});