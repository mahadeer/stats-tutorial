var ffiProxy = require("ffi-proxy");

ffiProxy
    .buildAndProxy()
    .then(function (modules) {
        var event = new CustomEvent("ModulesReady", {
            detail: {
                Rust: modules.RustStats.GetRamUsage(),
                CPP: modules.CStats.GetRamUsage()
            }
        });
        window.dispatchEvent(event);
    })
    .catch(console.error);