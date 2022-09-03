import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'genral',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }

  capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading: false,
      page: 1
    };
    document.title = `DailyNews - ${this.capitalizeFirstLetter(this.props.category)}`
  }
  async componentDidMount(){
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=404891383398468f9c2505af24c5d83f&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles, 
      totalResults: parseData.totalResults,
      loading:false
    })
  }
  

  handlePrevClick = async ()=>{
    console.log("Prev Button CLicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=404891383398468f9c2505af24c5d83f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    

    this.setState({
      page : this.state.page-1,
      articles: parseData.articles,
      loading:false
    })
  }


  handleNextClick = async ()=>{
    console.log("Clicked Next Button")
    
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
    {

    }
    else
    {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=404891383398468f9c2505af24c5d83f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    

    this.setState({
      page : this.state.page+1,
      articles: parseData.articles,
      loading : false
    })
  }
    
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='my-3 mx-5 text-center'> DailyNews -  Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
          
        </div>
        <div className='d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

        </div>
        
      </div>
    )
  }
}
