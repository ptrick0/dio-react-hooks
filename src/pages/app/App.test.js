import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const response = [{ a: 'Speaker', q: 'Quote test' }];

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app, with a button, a quote and a image', () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    const quoteEl = await screen.findByText(response[0].q);

    expect(quoteEl).toBeInTheDocument();
});

test('calls api on startup and render ir response', async () => {
    render(<App />);

    const quoteEl = await screen.findByText(response[0].q);

    expect(quoteEl).toBeInTheDocument();
});