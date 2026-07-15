self.addEventListener("install", event => {
    console.log("LG WORX installed");
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log("LG WORX activated");
});