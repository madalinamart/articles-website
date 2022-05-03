import React from 'react'
import ArticlesList from '../components/ArticlesList'
import articleContent from './article-content'


const ArticleListPage = () => {
  return (
    <>
    <ArticlesList articles={articleContent} />
    </>
  )
}

export default ArticleListPage