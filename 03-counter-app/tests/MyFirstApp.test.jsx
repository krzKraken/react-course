/** @jest-environment jsdom */

import { render } from "@testing-library/react";

const { MyFirstApp } = require("../src/myFirstApp");

describe("Testing <MyFirstApp/>", () => {

  //? snapshot create a render file (html) to compare with future changes in the component 

  // test("This should match with the snapshot", () => {

  //   const titulo = "hola soy goku";
  //   const { container } = render(<MyFirstApp title={titulo} />);
  //   expect(container).toMatchSnapshot();
  // });

  //? compare the snapshot with the component received

  /*
  test('should show the title in the h1 tag', () => {
    const titulo = "Hola, soy goku";
    const { container, getByText } = render(<MyFirstApp title={titulo} />);
    // expect(getByText(titulo)).toBeTruthy();
    //! Una forma de asegurarse que esta dentro de un h1 el titulo (NO LA RECOMENDADA POR REACT)
    const h1 = container.querySelector("div");
    console.log(h1.innerHTML);
    expect(h1.innerHTML).toContain(titulo);
  })

  //? 
  test('should show if the paramether sent is in the component without verify the cointened tag', () => {
    const titulo = "Hola, soy goku";
    const { container, getByText, getByTestId } = render(<MyFirstApp title={titulo} />);
    expect(getByTestId("test-title").innerHTML).toContain(titulo);

  });
  */

  test('should show the subtitle sent by props', () => {

    const title = "hola, soy goku";
    const subTitle = "Soy un subtitle";
    const { getAllByText } = render(
      <MyFirstApp
        title={title}
        subTitle={subTitle}
      />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  })

});
