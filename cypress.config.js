const { defineConfig } = require("cypress");
const readXlsx = require('./cypress/support/utils/excel.utils.ts')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        'readXlsx': readXlsx.read
      })
    },
  },
});
