import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    static defaultProps = {
        pageSize: 6,
        country: 'ca',
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }

    async componentDidMount() {
        this.handleClick();
    }



    async handleClick() {
        let apiURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea0a1813cdde48fa8ec356e7d1229793&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let news = await fetch(apiURL);
        let parsedNews = await news.json()
        this.setState({
            articles: parsedNews.articles,
            totalResults: parsedNews.totalResults,
            loading: false
        })

    }


    handlePrevCLick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.handleClick();
    }

    handleNextCLick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        console.log(this.state.page)

        this.handleClick();
    }


    render() {
        return (

            <div className="container my-3" >
                <h1 className='text-center'> Latest News!</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((e) => {
                        return (
                            <div className='col-md-4' key={e.url}>
                                <NewsItem title={e.title} desc={e.description ? e.description.replace(/(<([^>]+)>)/ig, '').slice(0, 80) + '...' : ''} imgURL={e.urlToImage} newsURL={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>
                        )
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevCLick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News