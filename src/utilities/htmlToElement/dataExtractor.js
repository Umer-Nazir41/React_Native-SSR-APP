import htmlparser from 'htmlparser2-without-node-native';

export let aTags = [];
export let body;

export default htmlToElement = (rawHtml, done) => {
  function domToElement(dom, parent) {
    if (!dom) return null;

    dom.map((node, index, list) => {
      if (node.attribs !== undefined && node.attribs.class === 'nav-wrapper') {
        ExtractATags(node);
      }

      if (
        node.attribs !== undefined &&
        node.attribs.class === 'container' &&
        node.parent !== undefined &&
        node.parent.name === 'div' &&
        node.parent.attribs.class === undefined
      ) {
        //console.log(node);
        body = node;
      }

      domToElement(node.children, node);
    });
  }

  const handler = new htmlparser.DomHandler(function (err, dom) {
    if (err) done(err);
    done(null, domToElement(dom));
  });

  const parser = new htmlparser.Parser(handler);
  parser.write(rawHtml);
  parser.done();
};

const ExtractATags = node => {
  if (node.children)
    for (const child in node.children) {
      ExtractATags(node.children[child]);
    }

  if (node.type === 'tag') {
    if (node.name === 'a' && node.attribs && node.attribs.href) {
      if (!aTags.some(value => value.link === node.attribs.href)) {
        aTags.push({
          name: node.children[0].data,
          link: node.attribs.href,
        });
      }
    }
  }
};
