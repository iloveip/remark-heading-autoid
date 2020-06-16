# remark-heading-autoid

[remark](https://github.com/remarkjs/remark) plugin to add numbered auto ids to headings:

```
<h2 id="id1">head</h2>
```

The plugin also supports custom ids:

```
## My Heading {#custom-id}
```

Will output to:

```
<h2 id="custom-id">My Heading</h2>
```

## Install

```
npm install remark-heading-autoid
```

## Options

You can pass a custom `prefix` for ids in options. If no prefix is provided, `id`, followed by the consecutive number of the heading, is used.

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
