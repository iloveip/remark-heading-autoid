const remark = require("remark");
const stringify = require("remark-rehype");
const html = require("rehype-stringify");
const autoHeadingId = require(".");

describe("autoHeadingId", function () {
  it("should parse with id", function () {
    let { contents } = remark()
      .data("settings", {
        position: false,
      })
      .use(autoHeadingId)
      .use(stringify)
      .use(html).processSync(`
# heading one
## heading two
    `);

    expect(contents).toMatchInlineSnapshot(`
      "<h1 id=\\"id1\\">heading one</h1>
      <h2 id=\\"id2\\">heading two</h2>"
    `);
  });

  it("should parse with custom prefix", function () {
    let { contents } = remark()
      .data("settings", {
        position: false,
      })
      .use(autoHeadingId, { prefix: "heading-" })
      .use(stringify)
      .use(html).processSync(`
# heading one
## heading two
    `);

    expect(contents).toMatchInlineSnapshot(`
      "<h1 id=\\"heading-1\\">heading one</h1>
      <h2 id=\\"heading-2\\">heading two</h2>"
    `);
  });

  it("should parse with custom id", function () {
    let { contents } = remark()
      .data("settings", {
        position: false,
      })
      .use(autoHeadingId)
      .use(stringify)
      .use(html).processSync(`
# heading one
## heading two {#custom-id}
## heading three
    `);

    expect(contents).toMatchInlineSnapshot(`
      "<h1 id=\\"id1\\">heading one</h1>
      <h2 id=\\"custom-id\\">heading two</h2>
      <h2 id=\\"id3\\">heading three</h2>"
    `);
  });
});
