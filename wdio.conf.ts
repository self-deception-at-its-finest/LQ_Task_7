import 'dotenv/config'
import allure from '@wdio/allure-reporter'

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './test/specs/**/*.ts',
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--lang=en-US',
                '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--window-size=1920,1080',
                '--accept-lang=en-US',
                '--disable-geolocation',
                '--disable-features=Geolocation',
                '--use-fake-ui-for-media-stream',
                '--use-fake-device-for-media-stream',
            ],
            prefs: {
                'intl.accept_languages': 'en-US,en',
                'profile.default_content_setting_values.geolocation': 2,
                'profile.default_content_setting_values.notifications': 2,
            }
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: process.env.BASE_URL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['visual'],
    framework: 'mocha',

    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false}
        ]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test: any, context: any, { error, result, duration, passed, retries  }: any): Promise<void> {
        if (error) {
            await browser.takeScreenshot()
        }
    }
}
