const remark = require("remark");
const stringify = require("remark-rehype");
const html = require("rehype-stringify");
const autoHeadingId = require(".");

describe("autoHeadingId", function () {
  it("should parse well", function () {
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
});
