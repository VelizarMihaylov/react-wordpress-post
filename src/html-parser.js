import { Parser, DomHandler } from 'htmlparser2-20kb'

const htmlParser = rawHtml => {
  const handler = new DomHandler(function (error, dom) {
    if (error) {
      throw Error('Error parsing HTML ', error)
    }
  })

  const parser = new Parser(handler)
  parser.write(rawHtml)
  parser.end()
  const { dom } = handler
  const nodes = dom.filter(node => node.children).map(element => element)
  return nodes
}

export default htmlParser
