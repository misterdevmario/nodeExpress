const crypto = require("node:crypto");
const https = require("node:https");

const start = Date.now();

// crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
// console.log("Hass",Date.now() - start, "Password encrypted")

// libuv has 4 threads set by default
// Increasing the number of threads
// process.env.UV_THREADPOOL_SIZE = 8;

const MAX_CALLS = 12;

// for (let i = 0; i < MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hass: ${i + 1}`,Date.now() - start, "Password encrypted")
//     });
// }

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
