var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: white;\n  border-radius: 2px;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  margin-top: 16px;\n  transform-origin: top left;\n\n  animation: ', ' 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  overflow: hidden;\n'], ['\n  background: white;\n  border-radius: 2px;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  margin-top: 16px;\n  transform-origin: top left;\n\n  animation: ', ' 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n'], ['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  background: whitesmoke;\n  border: 0;\n  box-sizing: border-box;\n  color: #363636;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0;\n  outline: 0;\n  padding: 8px 16px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,0.1);\n  width: 100%;\n\n  transition: background 0.21s ease-in-out;\n\n  &:focus, &:hover {\n    background: #eeeeee;\n  }\n'], ['\n  background: whitesmoke;\n  border: 0;\n  box-sizing: border-box;\n  color: #363636;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0;\n  outline: 0;\n  padding: 8px 16px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,0.1);\n  width: 100%;\n\n  transition: background 0.21s ease-in-out;\n\n  &:focus, &:hover {\n    background: #eeeeee;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled, { keyframes } from 'styled-components';

var fadeInScale = keyframes(_templateObject);

var Container = styled.div(_templateObject2, fadeInScale);

var Inner = styled.div(_templateObject3);

var Button = styled.div(_templateObject4);

function Editor(props) {
  var geometry = props.annotation.geometry;

  if (!geometry) return null;

  return React.createElement(
    Container,
    {
      className: props.className,
      style: _extends({
        position: 'absolute',
        left: geometry.x + '%',
        top: geometry.y + geometry.height + '%'
      }, props.style)
    },
    React.createElement(
      Inner,
      null,
      React.createElement('textarea', {
        placeholder: 'Hotspot name',
        onChange: function onChange(e) {
          return props.onChange(_extends({}, props.annotation, {
            data: _extends({}, props.annotation.data, {
              text: e.target.value
            })
          }));
        },
        value: props.annotation.data && props.annotation.data.text
      })
    ),
    React.createElement(
      Button,
      {
        onClick: props.onSubmit
      },
      'Add Hotspot'
    )
  );
}

Editor.defaultProps = {
  className: '',
  style: {}
};

export default Editor;