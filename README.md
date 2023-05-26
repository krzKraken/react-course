# Create a React pro

<!-- Create a project -->

```
npx create-react-app <my-app>
cd my-app/ - npm start
```

<!-- Create a project with yarn y vite -->
<!-- instalaciones yarn (dependencias locales) y npm (dependencias globales) -->

# Create React Project with yarn y vite

```
yarn create vite
Select project language
cd app-folder/
yarn => Install dependencies
yarn dev => Run application
```

## Change npm to yarn

- delete package-lock.json from npm folder and
  b

```
yarn install
```

## change yarn to npm

delete yarn.lock file and run

```
 npm install
```

## PropTypes

This is to use a validator for the parameters passed
in the component add this

- import PorpTypes from 'prop-types' -> not needed if using create-react-app
- yarn add prop-types

# Hooks

## > _useState_

functions uset to change values or update states

```
 import {useState} from 'react'
```

**Implementation**
val -> valor inicial
setVal -> function setting new value to val

```

const [val, setval] = useState(xVal);
setval ( (c) =>{
  c+1 // new value
})
```

# testing with JEST

1. Install the dev dependencies for _jest_

```
yarn add --dev jest
```

2. Add this script to your script json at the package.json file
   **_"test" : "jest"_**
   **_"test" : "jest --watchAll"_** -> to keep looking for new changes

```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest --watchAll"
  },
```

3. Create our test

```
/tests/demo.test.js
```

**Example:**

```
test('test example', () => {
  if (val === undefined) {
    throw new Error('Error Message');
  }
})
```

4. Execute the following command in the terminal (app folder)

```
yarn test
```

5. able the jest intelligence

```
yarn add -D @types/jest
```

6. Generate Jest config file

```
jest --init
```

7. Using Babel
   **yarn**

```
yarn add --dev babel-jest @babel/core @babel/preset-env
```

**npm**

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

**babel.config.js**

```
module.exports = {
  presets: [
    [
      '@babel/preset-env', {
    targets: {
      node: 'current'}
      }]],
};
```

8. **Change the babel.config.js and jest.config.mjs** to _.cjs_ <-

9. Solving troubles for jest in test fetch api

cretate 2 files in the root directory

- jest.config.js
- jest.setup.js

install the package

- yarn add -D wahtwg-fetch

# Testing in react components

Testing Library (React components test library)

- https://testing-library.com/

  Jest (unit test for js)

- https://jestjs.io/

## Testing with testing-Library

install the dependencies

```
yarn add --dev @testing-library/react
```

then you should import the test library in the testfile ___MyFirstApp.test.jsx___

```
const { render } = require("@testing-library/react");
const { MyFirstApp } = require("../src/myFirstApp");

describe("Testing <FirstApp/>", () => {
  test("This should match with the snapshot", () => {
    render(<MyFirstApp />);
  });
});

```

_note: you should update the jest.config.js update with this_
_note: Important to know maybe you need to change the extension name __.js__ to __.cjs___

jest.config.js
```
module.exports = {

  testEnviroment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js']

}
```

jest.setup.js
```

import 'whatwg-fetch';
```

babel.config.cdjs
```
module.exports = {

  // add babel preset-env and preset-react
  presets: [
    ['@babel/preset-env', {
      targets: {
        esmodules: true,
      }
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    },]
  ]
};

```

And don't forget to add the dependencies with
- yarn add -D jest-environment-jsdom
- yarn add -D @babel/preset-react
- yarn add -D @babel/preset-env

## __IMPORTANT__
if you have this problem when you are running the test, you should add this line to the component file
_file.test.jsx_
```
/** @jest-environment jsdom */
```


# Snapshot
When you run the test with .matchWithSnapshot(); this will create a snapshot in the testfolder named __snapshot__ and if the component changes, the test will fail because it was expecting a snapshot.

```
/** @jest-environment jsdom */

import { render } from "@testing-library/react";

const { MyFirstApp } = require("../src/myFirstApp");

describe("Testing <MyFirstApp/>", () => {

  test("This should match with the snapshot", () => {

    const titulo = "hola soy goku";
    const { container } = render(<MyFirstApp title={titulo} />);
    expect(container).toMatchSnapshot();
  });
});
```

note: You can update the snapshot pressing the u key if you need it

