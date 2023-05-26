/** @jest-environment jsdom */

//? screen return the html update in the
import { render, screen } from "@testing-library/react";

const { MyFirstApp } = require("../src/myFirstApp");

describe("Testing <MyFirstApp/>", () => {
  const title = "hola, soy Goku"
  const subTitle = "Hola soy un subtitle"
  test('should match with the snapshot', () => {

    const { container } = render(
      <MyFirstApp title={title} />
    );
    expect(container).toMatchSnapshot();
  })

  test('should match with the snapshot', () => {
    render(<MyFirstApp title={title} />)
    // screen.debug(); // -> console.log(screen)
    //? exist the title? 

    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show the title in a h1 tag', () => {
    render(<MyFirstApp title={title} />)
    // screen.debug(); // -> console.log(screen)
    //? exist the title? 

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('should show the subtitle sent by the props', () => {
    render(
      <MyFirstApp
        title={title}
        subTitle={subTitle}
      />
    );
    screen.debug(); // -> console.log(screen)
    expect(screen.getAllByText(subTitle).length).toBe(2);


  });

});
