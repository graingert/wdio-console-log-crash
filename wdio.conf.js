exports.config = {
  sync: false,

  specs: [
    './specs/**/*.js'
  ],
  exclude: [],
  capabilities: [
    { browserName: 'chrome' },
  ],

  logLevel: 'command',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://doesnotexist',

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd'
  },

  reporters: ['dot'],
  reporterOptions: {
    outputDir: './test-reports/'
  },
}
