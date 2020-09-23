const fs = require("fs");
const io = require("@actions/io");

test('creates directory successfully', async () => {
  await io.mkdirP("path/to/make");
  const path = fs.existsSync("path/to/make");
  expect(path).toBe(true);
});

test('removes directory successfully', async () => {
    await io.rmRF("path");
    const path = fs.existsSync("path/to/make");
    expect(path).toBe(false);
})