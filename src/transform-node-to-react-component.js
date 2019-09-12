/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Fragment } from 'react'
import get from 'lodash/get'

const transformNodeToReactComponent = (node) => {
  if (!node) return null
  switch (node.name) {
    /* ----------------- div ----------------- */
    // case 'div':
    //   break
    /* ----------------- blockquote----------------- */
    case 'blockquote':
      return {
        name: 'blockquote',
        children: get(node, 'children[0].children[0].data', null)
      }
    /* ----------------- p ----------------- */
    case 'p':
      return {
        name: 'p',
        children: get(node, 'children[0].data', null)
      }
    /* ----------------- figure----------------- */
    case 'figure':
      /* ----------------- img ----------------- */
      if (node.children[0].name === 'img') {
        const {
          children: [
            {
              attribs: {
                src,
                alt
              }
            }
          ]
        } = node
        let caption
        if (node.children.length === 2) {
          const {
            children: [
              ,
              {
                children: [
                  {
                    data
                  }
                ]
              }
            ]
          } = node
          caption = data
        }
        return {
          name: 'img',
          children: (
            <Fragment>
              <img src={src} alt={alt} />
              <figcaption>{caption}</figcaption>
            </Fragment>
          )
        }
      }
      /* ----------------- youtube embed----------------- */
      if (node.attribs.class.includes('wp-block-embed-youtube')) {
        const {
          children: [{
            children: [
              ,
              {
                attribs: {
                  title,
                  src
                }
              }
            ]
          }]
        } = node
        return {
          name: 'youtube',
          children: <iframe src={src} name={title} />
        }
      }
      return null
    default:
      return null
  }
}

export default transformNodeToReactComponent
