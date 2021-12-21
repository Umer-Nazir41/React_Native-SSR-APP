import React, {useState, useEffect} from 'react';
import Drawer from "../navigation/Drawer"
import {
  Linking,
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import axios from 'axios';
import htmlparser from 'htmlparser2-without-node-native';
import {useDispatch, useSelector} from 'react-redux';
import {addNewItem} from '../store/reducers/headerSlice';
const boldStyle = {fontWeight: 'bold'};
const italicStyle = {fontStyle: 'italic'};
const underlineStyle = {textDecorationLine: 'underline'};
const strikethroughStyle = {textDecorationLine: 'line-through'};
const codeStyle = {fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace'};
const baseStyles = StyleSheet.create({
  b: boldStyle,
  strong: boldStyle,
  i: italicStyle,
  em: italicStyle,
  u: underlineStyle,
  s: strikethroughStyle,
  strike: strikethroughStyle,
  pre: codeStyle,
  code: codeStyle,
  a: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  h1: {fontWeight: 'bold', fontSize: 36},
  h2: {fontWeight: 'bold', fontSize: 30},
  h3: {fontWeight: 'bold', fontSize: 24},
  h4: {fontWeight: 'bold', fontSize: 18},
  h5: {fontWeight: 'bold', fontSize: 14},
  h6: {fontWeight: 'bold', fontSize: 12},
});
const opts = {
  addLineBreaks: true,
  linkHandler: url => Linking.openURL(url),
  linkLongPressHandler: null,
  styles: {...baseStyles},
  onError: console.error.bind(console),
  //customRenderer: renderNode,
  RootComponent: element => <View {...element} />,
};
const Img = props => {
  const width =
    parseInt(props.attribs['width'], 10) ||
    parseInt(props.attribs['data-width'], 10) ||
    0;
  const height =
    parseInt(props.attribs['height'], 10) ||
    parseInt(props.attribs['data-height'], 10) ||
    0;
  const imgStyle = {
    width,
    height,
  };
  const source = {
    uri: props.attribs.src,
    width,
    height,
  };
  return <AutoSizedImage source={source} style={imgStyle} />;
};
const BASE_URL = 'http://150.230.126.140:3000';
const Home = () => {
  const [html, setHtml] = useState(<View></View>);
  const [defaultPATH, setDefaultPath] = useState('/');
  // Condition here
  // useEffect(()=>{
  //   if(props.route.params.link){
  //     setDefaultPath(props.route.params.link)
  //   }
  // },[props.route.params.link])
  const aTags = useSelector(state => state.header.aTags);
  const dispatch = useDispatch();
  //const [nodeType, setNodeType] = useState(Text);
  const defaultOpts = {
    lineBreak: '\n',
    paragraphBreak: '\n\n',
    bullet: '\u2022 ',
    TextComponent: Text,
    textComponentProps: null,
    NodeComponent: Text,
    nodeComponentProps: null,
  };
  useEffect(() => {
    const getHTML = async () => {
      const users = await axios
        .get(BASE_URL + defaultPATH)
        .then(function (response) {
          //console.log(response);
          var root = response.data;
          root = root.split('<body>')[1];
          root = root.split('<script>')[0];
          //root = root.split('<div class="navbar-fixed">')[1];
          //root = root.split('<div class="container"><div><div class="row">')[0];
          htmlToElement(root, opts, (err, element) => {
            if (err) {
              console.log(err);
            }
            setHtml(element);
          });
          //console.log(root);
        })
        .catch(function (error) {
          alert(error.message);
        });
    };
    getHTML();
  }, [defaultPATH]);
  const htmlToElement = (rawHtml, customOpts = {}, done) => {
    const opts = {
      ...defaultOpts,
      ...customOpts,
    };
    function inheritedStyle(parent) {
      if (!parent) return null;
      const style = StyleSheet.flatten(opts.styles[parent.name]) || {};
      const parentStyle = inheritedStyle(parent.parent) || {};
      return {...parentStyle, ...style};
    }
    function domToElement(dom, parent) {
      if (!dom) return null;
      const renderNode = opts.customRenderer;
      let orderedListCounter = 1;
      return dom.map((node, index, list) => {
        if (renderNode) {
          const rendered = renderNode(node, index, list, parent, domToElement);
          if (rendered || rendered === null) return rendered;
        }
        const {TextComponent} = opts;
        if (
          node.attribs !== undefined &&
          node.attribs.class === 'nav-wrapper'
        ) {
          ExtractATags(node);
        }
        if (node.type === 'text') {
          // const defaultStyle = opts.textComponentProps
          //   ? opts.textComponentProps.style
          //   : null;
          // const customStyle = inheritedStyle(parent);
          return (
            <TextComponent
              //{...opts.textComponentProps}
              key={index}
              //style={[defaultStyle, customStyle]}
            >
              {node.data + '\n'}
              {/* {entities.decodeHTML(node.data)} */}
            </TextComponent>
          );
        }
        if (node.type === 'tag') {
          if (node.name === 'img') {
            return <Img key={index} attribs={node.attribs} />;
          }
          let linkPressHandler = null;
          if (node.name === 'a' && node.attribs && node.attribs.href) {
            //setNodeType(Text);
            linkPressHandler = () => {
              //console.log(node.attribs.href);
              setDefaultPath(node.attribs.href);
              //console.log(defaultPATH);
            };
          }
          let linebreakBefore = null;
          let linebreakAfter = null;
          if (opts.addLineBreaks) {
            switch (node.name) {
              case 'pre':
                linebreakBefore = opts.lineBreak;
                break;
              case 'p':
                //setNodeType(Text);
                if (index < list.length - 1) {
                  linebreakAfter = opts.paragraphBreak;
                }
                break;
              case 'br':
              case 'h1':
              case 'h2':
              case 'h3':
              case 'h4':
              case 'h5':
                //setNodeType(Text);
                linebreakAfter = opts.lineBreak;
                break;
            }
          }
          let listItemPrefix = null;
          if (node.name === 'ol') {
            //setNodeType(View);
          }
          if (node.name === 'ul') {
            //setNodeType(View);
          }
          if (node.name === 'li') {
            const defaultStyle = opts.textComponentProps
              ? opts.textComponentProps.style
              : null;
            const customStyle = inheritedStyle(parent);
            if (!parent) {
              listItemPrefix = null;
            } else if (parent.name === 'ol') {
              listItemPrefix = (
                <TextComponent style={[defaultStyle, customStyle]}>
                  {`${orderedListCounter++} `}
                </TextComponent>
              );
            } else if (parent.name === 'ul') {
              listItemPrefix = (
                <TextComponent style={[defaultStyle, customStyle]}>
                  {opts.bullet}
                </TextComponent>
              );
            }
            if (opts.addLineBreaks && index < list.length - 1) {
              linebreakAfter = opts.lineBreak;
            }
          }
          const {NodeComponent, styles} = opts;
          return (
            <NodeComponent
              {...opts.nodeComponentProps}
              key={index}
              onPress={linkPressHandler}
              //style={!node.parent ? styles[node.name] : null}
              //onLongPress={linkLongPressHandler}
            >
              {linebreakBefore}
              {listItemPrefix}
              {domToElement(node.children, node)}
              {linebreakAfter}
            </NodeComponent>
          );
        }
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
        let tag = {
          name: node.children[0].data,
          link: node.attribs.href,
        };
        dispatch(addNewItem(tag));
      }
    }
  };
  console.log(aTags);
  const header = useSelector((state) => state.header.aTags)
  

  return (
    <ScrollView>
      {/* <Text>Link: {JSON.stringify(props.route.params.link)}</Text> */}
      {/* <Text>{JSON.stringify(header)}</Text> */}
      <View>{html}</View>
    </ScrollView>
  );
};
export default Home;