import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        };
    }


    static defaultProps = {
        pageSize: 12,
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
        this.props.progBar(10)
        let apiURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        document.title = `NewsKreen - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News`
        let news = await fetch(apiURL);
        this.props.progBar(30)
        let parsedNews = await news.json()

        this.setState({
            articles: parsedNews.articles,
            totalResults: parsedNews.totalResults,
            loading: false,
        })
        this.props.progBar(100)
    }


    fetchMoreData = async () => {
        setTimeout(async () => {
            this.setState({
                page: this.state.page + 1
            })
            let apiURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            document.title = `NewsKreen - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News`
            let news = await fetch(apiURL);
            let parsedNews = await news.json()
            this.setState({
                articles: this.state.articles.concat(parsedNews.articles),
                totalResults: parsedNews.totalResults,
            })
        }, 1500);
    };


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

        this.handleClick();
    }



    render() {
        return (
            <>
                <h1 className='text-center mt-5'> Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.articles.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className='row'>
                            {this.state.articles.map((e) => {
                                return (
                                    <div className='col-md-4' key={e.url}>
                                        <NewsItem title={e.title} desc={e.description ? e.description.replace(/(<([^>]+)>)/ig, '').slice(0, 80) + '...' : ''} imgURL={e.urlToImage} newsURL={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevCLick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News