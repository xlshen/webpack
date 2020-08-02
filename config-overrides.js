const lessVars = require('./src/styles/theme');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const rewireCreateReactLibrary = require('react-app-rewire-create-react-library');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: lessVars
    }
  }),
  (config, env) => rewireCreateReactLibrary(config, env)
);
