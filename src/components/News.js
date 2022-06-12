import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    useEffect(() => {
        handleClick()
    }, [])


    const handleClick = async () => {
        props.progBar(10)
        let apiURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        document.title = `NewsKreen - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News`
        let news = await fetch(apiURL);
        props.progBar(30)
        let parsedNews = await news.json()

        setArticles(parsedNews.articles)
        setTotalResults(parsedNews.totalResults)
        setLoading(false)

        props.progBar(100)
    }


    const fetchMoreData = async () => {
        setTimeout(async () => {
            setPage(page + 1)
            let apiURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            document.title = `NewsKreen - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News`
            let news = await fetch(apiURL);
            let parsedNews = await news.json()
            setArticles(articles.concat(parsedNews.articles))
            setTotalResults(parsedNews.totalResults)
        }, 1500);
    };


    return (
        <>
            <h1 className='text-center mt-5'> NewsKreen - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== articles.totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className='row'>
                        {articles.map((e) => {
                            return (
                                <div className='col-md-4' key={e.url}>
                                    <NewsItem title={e.title} desc={e.description ? e.description.replace(/(<([^>]+)>)/ig, '').slice(0, 80) + '...' : ''} imgURL={e.urlToImage} newsURL={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )

}

News.defaultProps = {
    pageSize: 12,
    country: 'ca',
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News