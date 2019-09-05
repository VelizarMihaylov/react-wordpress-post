import transformWordpressPostDefinition from '../index'
describe('transformWordpressPostDefinition', () => {
  const htmlParser =  html => html
  it('should return null if no matching node in the html', () => {
    const html = '<div>Some random div</div>'
    expect(transformWordpressPostDefinition(htmlParser)(html)).toBe(null)
  })
})
