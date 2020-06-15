# remark-heading-autoid

[remark](https://github.com/remarkjs/remark) plugin to add numbered ids to headings.

## Install

```
npm install remark-heading-autoid
```

## Options

You can pass a custom prefix for ids in options. If no prefix is provided, `id`, followed by the consecutive number of the heading, is used:

```
<h1 id="id1">head</h1>
```

## Use with Gatsby and MDX

In `gatsby-congis.js`:

```
const autoHeading = require('remark-heading-autoid')
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [autoHeading, otherPlugin]
      }
    }
  ]
}
```

Use with options:

```
const autoHeading = require('remark-heading-autoid')
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [[autoHeading, { prefix: 'heading-'}], otherPlugin]
      }
    }
  ]
}
```
