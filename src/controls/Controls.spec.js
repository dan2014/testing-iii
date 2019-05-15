import React from 'react';
import {render, cleanup} from 'react-testing-library';
import Controls from './Controls';
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe("<Controls />", () => {
    describe('Lock-Unlock Button State', () => {
        it("State should be lock at start", () => {
            const {getByText} = render(<Controls/>);
            const lockGate = getByText(/lock gate/i);
            expect(lockGate.textContent).toBe("Lock Gate");
        })
    })
    describe('Close-Open Button State', () => {
        it("State should be close at start", () => {
            const {getByText} = render(<Controls/>);
            const closeGate = getByText(/close gate/i);
            expect(closeGate.textContent).toBe("Close Gate");
        })
    })
})