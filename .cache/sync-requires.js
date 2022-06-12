const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/src/pages/404.js"))),
  "component---src-templates-advanced-js": hot(preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/src/templates/advanced.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/src/templates/blog.js"))),
  "component---src-templates-docs-js": hot(preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/src/templates/docs.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/workspace/BGOONZBLOG2.0STABLE/src/templates/post.js")))
}

