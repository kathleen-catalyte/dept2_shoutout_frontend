import { render, screen } from '@testing-library/react'

import SeeShoutouts from './../see-shoutouts.tsx';


// TEST BEHAVIOUR, NOT THE IMPLEMENTATION
// Test that see-shoutouts button takes employeeId of search componenet and navigates to profile page
// Click see-shoutout button on search component and user is navigated to employee profile page

// I think this test does not make sense in this context, to check if it has been rendered we would need to have it rendered on the search component?

test('renders see-shoutout component', () => {
    // 1) rendering the component we want to test
    render(<SeeShoutouts />)
    
    // 2) Finding the elements
    const navElement = screen.getByTestId('custom-element');

    // 3) Assertion
    expect(navElement).toBeInTheDocument();
})