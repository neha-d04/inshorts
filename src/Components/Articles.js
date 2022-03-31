import React from 'react'
import { useEffect, useState } from 'react'
import { setNews } from '../service/api.js'
import infiniteScroll from 'react-infinite-scroll-component';
//component
import Article from './Article.js'

const Articles = () => {
  const [news, getNews] = useState([]);
  
  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let res = await setNews();
    getNews(res.data);
    //console.log(res.data);
    console.log(news);
  }

  return (
    
      news?.length > 0 && news.map((article) => (
        <Article article={article} />
      ))

   
  )
}

export default Articles;