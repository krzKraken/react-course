

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

// module.exports = {
//   presets: [
//     '@babel/preset-env',
//     ['@babel/preset-react', { runtime: 'automatic' }],
//   ],
// };