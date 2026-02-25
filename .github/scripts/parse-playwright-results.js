const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, '../../reports/test-results.json');
let summary = '';

try {
  const data = fs.readFileSync(resultsPath, 'utf-8');
  const results = JSON.parse(data);
  const total = results.suites.reduce((acc, suite) => acc + suite.specs.length, 0);
  let passed = 0, failed = 0;
  results.suites.forEach(suite => {
    suite.specs.forEach(spec => {
      if (spec.ok) passed++;
      else failed++;
    });
  });
  summary = `<h2>Playwright Test Report</h2>
    <p><b>Total:</b> ${total}</p>
    <p><b>Passed:</b> ${passed}</p>
    <p><b>Failed:</b> ${failed}</p>
    <p><b>Completed:</b> ${passed + failed}</p>`;
} catch (e) {
  summary = 'Could not parse test results.';
}

console.log(`::set-output name=summary::${summary}`);
