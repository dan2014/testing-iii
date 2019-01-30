import React from 'react';
import {render, cleanup} from 'react-testing-library';
import Display from './Display';
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe("<Display />", () => {
    describe('Display Component State Open-Closed', () => {
        it("State should be open at start", () => {
            const {getByText} = render(<Display/>);
            const openClosedState = getByText(/open/i);
            expect(openClosedState.textContent).toBe("Open");
        })
    })
    describe('Display Component State Unlocked-Locked', () => {
        it("State should be unlocked at start", () => {
            const {getByText} = render(<Display/>);
            const unlockedLockedState = getByText(/unlocked/i);
            expect(unlockedLockedState.textContent).toBe("Unlocked");
        })
    })
})