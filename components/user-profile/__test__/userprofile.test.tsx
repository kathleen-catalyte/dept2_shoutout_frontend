import { fireEvent, screen, waitFor } from '@testing-library/dom'
import { Container, render } from "react-dom";
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import UserProfile from "..";

//seperate file i have to mcok some user data.
const mockUser = require('./mockuser.json')

//Using the mocked user data and mocking fetching the data.
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockUser)
})) as jest.Mock;
//Mocking some used Auth0 methods to bypass Auth0.
jest.mock("@auth0/nextjs-auth0", () => ({
    withApiAuthRequired: jest.fn().mockImplementation((component, ignore) => component),
    getAccessToken: jest.fn().mockImplementation((component, ignore) => component)
}))
jest.mock('next/router', () => ({
    useRouter() {
        return {
            pathname: '',
            // ... whatever else you you call on `router`
        };
    },
}));

let container: Element | DocumentFragment | null;



beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container!);
    container = null;
});
it('render page', async () => {
    // Test first render and componentDidMount
    act(() => {
        ReactDOM.createRoot(container!).render(<UserProfile id={1} />);
    });
    await waitFor(() => { expect(screen.getByTestId('back')).toBeInTheDocument() })

});

