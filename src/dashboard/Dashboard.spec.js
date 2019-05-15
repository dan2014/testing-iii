import React from 'react';
import {render,fireEvent, cleanup} from 'react-testing-library';
import Dashboard from './Dashboard';
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe("<Dashboard />", () => {

    describe('Close Button', () => {
        it("Activate close", () => {
            const {getByText} = render(<Dashboard/>);

            const openClosedState = getByText(/open/i);
            const unlockedLockedState = getByText(/Close Gate/i);

            expect(openClosedState.textContent).toBe("Open");
            fireEvent.click(unlockedLockedState);
            expect(openClosedState.textContent).toBe("Closed");
        })
    })

    describe('Lock Button', () => {
        it("Fail to lock", () => {
            const {getByText} = render(<Dashboard/>);

            const openClosedState = getByText(/open/i);
            const unlockedLockedState = getByText(/Lock Gate/i);

            expect(openClosedState.textContent).toBe("Open");
            fireEvent.click(unlockedLockedState);
            expect(openClosedState.textContent).toBe("Open");
        })
    })

    describe('Open Button', () => {
        it("Fail to open", () => {
            const {getByText} = render(<Dashboard/>);

            const gateOpenCloseState = getByText(/Open/i);
            const gateLockUnlockState = getByText(/Unlocked/i);
            const gateButtonOpenClose = getByText(/Close Gate/i);
            const gateButtonLockUnlock = getByText(/Lock Gate/i);

            expect(gateOpenCloseState.textContent).toBe("Open");
            expect(gateLockUnlockState.textContent).toBe("Unlocked");

            fireEvent.click(gateButtonOpenClose);
            fireEvent.click(gateButtonLockUnlock);
            fireEvent.click(gateButtonOpenClose);

            expect(gateOpenCloseState.textContent).toBe("Closed");
        })
    })
})