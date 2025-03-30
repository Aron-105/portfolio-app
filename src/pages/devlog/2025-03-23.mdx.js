
import {jsx as _jsx} from "react/jsx-runtime";
import * as React from "react";
//@jsxRuntime automatic @jsxImportSource react
export const meta = {"title":"Multi Display Test","date":"2025-03-23","author":"Aaron Alcalde"};

/*@jsxRuntime automatic @jsxImportSource react*/

function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return _jsx(_components.p, {
    children: "This is a test to make sure that the MDX build script and the Devlog rendering can handle multiple markdown files correctly."
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export default MDXContent;
  