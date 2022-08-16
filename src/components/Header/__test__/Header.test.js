import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
    it('use getByText', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
    it('use findByText for async', async () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = await screen.findByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
    it('use queryBytext for Return null	',() => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.queryByText(/dogs/i);
        expect(h1Element).not.toBeInTheDocument();
    });
    it('use getAllByRole for Return multiple elements',() => {
        render(
            <Header 
              title="todo"
            />
        );
        const headingElements = screen.getAllByRole("heading");
        expect(headingElements.length).toBe(2);
    });
})
it("Test h2 ID",()=>{
    render(<Header/>)
    const h2Element = screen.getByTestId("header-2");
    expect(h2Element).toBeInTheDocument();
})
it("check one heading from two ",()=>{
    render(<Header/>)
    const h1Element = screen.getByRole("heading",{name:"Hello"});
    expect(h1Element).toBeInTheDocument();
})
it('should render same text passed into title prop', () => {
    render(
        <Header 
          title="todo"
        />
    );
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
    render(
        <Header 
          title="todo"
        />
    );
    const h1Element = screen.getByTitle("Header");
    expect(h1Element).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
    render(
        <Header 
          title="todo"
        />
    );
    const h2Element = screen.getByTestId("header-2");
    expect(h2Element).toBeInTheDocument();
});

// WITH FINDBY

it('should render same text passed into title prop', async () => {
    render(
        <Header 
          title="todo"
        />
    );
    const h1Element = await screen.findByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
});

// WITH QUERYBY

it('should render same text passed into title prop', () => {
    render(
        <Header 
          title="todo"
        />
    );
    const h1Element = screen.queryByText(/dogs/i);
    expect(h1Element).not.toBeInTheDocument
});

// WITH GETALLBY

it('should render same text passed into title prop', () => {
    render(
        <Header 
          title="todo"
        />
    );
    const h1Elements = screen.getAllByText(/todo/i);
    expect(h1Elements.length).toBe(1);
});