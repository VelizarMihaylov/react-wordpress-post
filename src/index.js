/** @jsx jsx */
import { jsx } from '@emotion/core'

import htmlParser from './html-parser'
import transformNodeToReactComponent from './transform-node-to-react-component'
import React from 'react'

const generateReactComponent = (React, transformNodeToReactComponent) => (node, componentList, index) => {
  if (!node || typeof node !== 'object') throw Error(`Please provide a valid node to generateReactComponent.`)
  if (!componentList || typeof componentList !== 'object') throw Error(`Please provide a valid component list to generateReactComponent.`)
  const {
    name,
    children
  } = transformNodeToReactComponent(node) || {}
  if (name && children) {
    return <name {...componentList[name].props} children={children} />
  }
  return null
}

const transformWordpressPostDefinition = htmlParser => (html = '', componentList = {}) => {
  const defaultComponentList = {
    p: {
      type: 'p',
      ...componentList.p
    },
    blockquote: {
      type: 'blockquote',
      props: {},
      ...componentList.blockquote
    },
    img: {
      type: 'figure',
      props: {},
      ...componentList.img
    },
    youtube: {
      type: 'figure',
      props: {},
      ...componentList.youtube
    }
  }
  return htmlParser(html)
    .map((node, index) => generateReactComponent(React, transformNodeToReactComponent)(node, defaultComponentList, index))
}

const transformWordpressPost = transformWordpressPostDefinition(htmlParser)

export default transformWordpressPost
