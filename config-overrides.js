const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  config = injectBabelPlugin(['transform-semantic-ui-react-imports'], config);
  return config;
};
