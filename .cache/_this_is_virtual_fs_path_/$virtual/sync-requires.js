
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/src/pages/404.js"))
}

