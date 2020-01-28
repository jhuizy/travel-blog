import React from 'react';
import { BlogPostTemplate, Content } from '../../templates/post'

export default ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      html={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
      component={Content}
    />
  )
}
