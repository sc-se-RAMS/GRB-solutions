module.exports={
    presets:[
      [
        '@babel/preset-env',
        {
          targets:{
          node: 'current',
          },
        },
      ],
    ],
  };

  module.exports = {
    plugins:[
      '@babel/plugin-transform-modules-commonjs',
    ],
  };