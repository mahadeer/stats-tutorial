var ffiProxy = require("ffi-proxy");

ffiProxy
    .buildAndProxy()
    .then(function (modules) {
        var rustStats = modules.RustStats;
        console.log("(Rust) Fibonacci of 6 is ", rustStats.GetRamUsage());
        console.log("(Rust) Fibonacci of 6 is ", modules.CStats.GetRamUsage());
    })
    .catch(console.error);