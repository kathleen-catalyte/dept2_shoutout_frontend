import { render, screen } from '@testing-library/react'

import ShoutoutComp from '../shoutoutcomp';



const mockShoutout = require('./mockShoutout.json')



// TEST BEHAVIOUR, NOT THE IMPLEMENTATION
// Test that see-shoutouts button takes employeeId of search componenet and navigates to profile page
// Click see-shoutout button on search component and user is navigated to employee profile page

test('renders see-shoutout component', () => {
    // 1) rendering the component we want to test
    render(<ShoutoutComp shoutout={ mockShoutout} />)
    
    // 2) Finding the elements
    const shoutoutElement = screen.getByTestId('custom-element');

    // 3) Assertion
    expect(shoutoutElement).toBeInTheDocument();
})