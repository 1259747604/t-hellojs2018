const { override, fixBabelImports, addBabelPlugins } = require('customize-cra');

module.exports = override(
  //配置antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
);
