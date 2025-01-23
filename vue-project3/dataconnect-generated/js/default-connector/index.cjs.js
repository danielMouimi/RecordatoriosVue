const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'vue-project3',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

