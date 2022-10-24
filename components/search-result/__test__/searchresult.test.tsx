import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react';

import { fireEvent, screen, waitFor } from '@testing-library/dom'
import Home from 'pages';
import { Container, render } from "react-dom";
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import SearchResult from '../search-result';

//Mocking some used Auth0 methods to bypass Auth0.
jest.mock("@auth0/nextjs-auth0", () => ({
    withApiAuthRequired: jest.fn().mockImplementation((component, ignore) => component),
    getAccessToken: jest.fn().mockImplementation((component, ignore) => component)
}))
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
        ReactDOM.createRoot(container!).render(<SearchResult />);
    });
    await waitFor(() => { expect(screen.getByTestId('back')).toBeInTheDocument() })

});

// test('should have cleared the sessionStorage', () => {
//     dispatch(action.reset());
//     expect(sessionStorage.clear).toHaveBeenCalledTimes(1);
//     expect(sessionStorage.__STORE__).toEqual({}); // check store values
//     expect(sessionStorage.length).toBe(0); // or check length
// });

