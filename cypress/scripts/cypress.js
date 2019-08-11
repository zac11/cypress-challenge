const cypress = require('cypress');
const {merge } = require('mochawesome-merge');
const fse = require('fs-extra');
const generator = require('mochawesome-report-generator')

async function runTests() {
    await fse.remove('mochawesome-report');
    const {totalFailed } = await cypress.run();
    const jsonReports = await merge();
    await generator.create(jsonReport)
    process.exit(totalFailed);
}

runTests();