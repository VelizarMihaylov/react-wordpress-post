/** @jsx jsx */
import { jsx } from '@emotion/core'

import htmlParser from './html-parser'
import transformNodeToReactComponent from './transform-node-to-react-component'

const transformWordpressPostDefinition = (htmlParser) => (html = '', override = {}, extend) =>
  htmlParser(html)
    .map((node, index) => {
      if (!node || typeof node !== 'object') throw Error(`Please provide a valid node to generateReactComponent.`)
      if (typeof override !== 'object') throw Error(`Please provide a valid component list to generateReactComponent.`)
      const componentList = {
        p: {
          type: 'p',
          ...override.p
        },
        blockquote: {
          type: 'blockquote',
          props: {},
          ...override.blockquote
        },
        img: {
          type: 'figure',
          props: {},
          ...override.img
        },
        youtube: {
          type: 'figure',
          props: {},
          ...override.youtube
        }
      }
      const component = transformNodeToReactComponent(node, index)
      if (component) {
        const {
          name,
          children
        } = component
        const {
          type,
          props
        } = componentList[name]
        console.log('Type', type)
        return jsx(
          type,
          props,
          children
        )
      }
      return null
    })

const transformWordpressPost = transformWordpressPostDefinition(htmlParser)

export default transformWordpressPost
