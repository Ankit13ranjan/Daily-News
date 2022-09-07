import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `DailyNews - ${this.capitalizeFirstLetter(props.category)}`


  const capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async ()=>{
    props.setProgress(0);
    let url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=404891383398468f9c2505af24c5d83f&page=1&pageSize=${props.pageSize}`
    this.setState({loading:true})
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticles(parseData.artices)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  
  useEffect(() => {
    updateNews()
  }, [])
  
  
  const fetchMoreData = async () =>{
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    
    let data = await fetch(url);
    let parseData = await data.json();
    
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    
  };

  
    return (
      <>
        <h2 className='my-3 mx-5 text-center'> DailyNews -  Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
          
        </div>
        </div>
        </InfiniteScroll>
        
        
      </>
    )
  


}

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'genral',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
}


export default News