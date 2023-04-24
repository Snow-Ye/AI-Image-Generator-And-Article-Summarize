import React from 'react'
import {Hero} from '../components';
import {Demo} from '../components';
import '../utils/article.css';

const ArticleSum = () => {
  return (
    <main>
       <div className = "main">
            <div className = "gradient" />

       </div>



       <div className = "app">
        <Hero />
        <Demo />

       </div>
    </main>
  )
}

export default ArticleSum