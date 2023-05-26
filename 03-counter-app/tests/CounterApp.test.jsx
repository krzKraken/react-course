/** @jest-environment jsdom */

import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/Counter.App.jsx";


describe('Testing <CounterApp/>', () => {
    const val = 100;
    test('should match with the snapshot', () => {

        const { container } = render(<CounterApp valor={val} />)
        screen.debug();
        expect(container).toMatchSnapshot();
    });

    test('should show the initial value of 100', () => {

        render(<CounterApp valor={val} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(val.toString());
    });
    test('should return the action for click on 1+', () => {
        render(<CounterApp valor={val} />);
        //detect if clock in an elemento with text 1+
        fireEvent.click(screen.getByText('1+'));
        expect(screen.getByText('101')).toBeTruthy();
    });
    test('should return the action for click on 1+', () => {
        render(<CounterApp valor={val} />);
        //detect if clock in an elemento with text 1+
        fireEvent.click(screen.getByText('1-'));
        expect(screen.getByText('99')).toBeTruthy();
    });
    test('should return the action for click on reset', () => {
        render(<CounterApp valor={val} />);
        //detect if clock in an elemento with text 1+
        fireEvent.click(screen.getByText('1-'));
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText('100')).toBeTruthy();
    });

    //* Mejor opcion
    test('should return the action for click on reset', () => {
        render(<CounterApp valor={val} />);
        //detect if clock in an elemento with text 1+
        fireEvent.click(screen.getByText('1-'));
        fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByText('1-'));
        fireEvent.click(screen.getByText('1-'));
        fireEvent.click(screen.getByText('1-'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(val)).toBeTruthy();
    });


});
