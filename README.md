# reat-wordpress-post
Transform your Wordpress Posts in to React components when using the Wordpress REST API

### Motivation

Wordpress is the most popular CMS. With the introduction of the [Wordpress REST API](https://developer.wordpress.org/rest-api/) it became possible to use Wordpress in `headless` mode. A common use case is running Wordpress on the backend and using React (or some of the React implementations like Gatsby Js or Next.js) at the front end.

You can easilly fetch the Wordpress Post content  from the `/posts` endpoint and feed it to React on the client. But there is one problem. Wordpress will send the post HTML as a string. To work around that in your component you need to do something like:

```javascript
import React from 'react'

const postContent = "<div>Some awosome article ....</div>"

const ArticleComponent = () => <div dangerouslySetInnerHTML={() => { __html: postContent }} />

export default ArticleComponent

```

This is not ideal, not only because we are using `dangerouslySetInnerHTML` but also because we will "polute" our page HTML with all Wordpress specific `classes` and `id's` that we most probably dont plan to use.

React Wordpress Post is a way to work around that, making it possible to do:

```javascript
import React from 'react'

import reactWordpressPost from 'react-wordpress-post'

const postContent = "<div>Some awosome article ....</div>"

const ArticleComponent = () => <div>{reactWordpressPost(postContent)}</div>

export default ArticleComponent
```

React Wordpress Post will produce a default react component for each of the `blocks` produced by the Gutenberg editor.
