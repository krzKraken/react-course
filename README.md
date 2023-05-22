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

