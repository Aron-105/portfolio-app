
import {jsx as _jsx} from "react/jsx-runtime";
import * as React from "react";
//@jsxRuntime automatic @jsxImportSource react
export const meta = {"title":"Devlog Test","date":"2025-03-21","author":"Aaron Alcalde"};

/*@jsxRuntime automatic @jsxImportSource react*/

function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return _jsx(_components.p, {
    children: "This is a test to make sure the devlog is working. Welcome to the Devlog! Stay tuned for updates."
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export default MDXContent;