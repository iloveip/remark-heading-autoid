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
      .use(html)
      .processSync(`# heading`);

    expect(contents).toMatchInlineSnapshot(`"<h1 id=\\"id1\\">heading</h1>"`);
  });

  it("should parse with custom prefix", function () {
    let { contents } = remark()
      .data("settings", {
        position: false,
      })
      .use(autoHeadingId, { prefix: 'heading-' })
      .use(stringify)
      .use(html)
      .processSync(`# heading`);

    expect(contents).toMatchInlineSnapshot(`"<h1 id=\\"heading-1\\">heading</h1>"`);
  });
});
