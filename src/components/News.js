import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Typography, Grid, Container } from "@mui/material";
import Masonry from '@mui/lab/Masonry/Masonry';

function News(props) {

    const [articles, setArticles] = useState([])
    // eslint-disable-next-line
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    useEffect(() => {
        handleClick()
        // eslint-disable-next-line
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
            let apiURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
            setPage(page + 1)
            document.title = `NewsKreen - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News`
            let news = await fetch(apiURL);
            let parsedNews = await news.json()
            setArticles(articles.concat(parsedNews.articles))
            setTotalResults(parsedNews.totalResults)
        }, 1500);
    };


    return (
        <Container>
            <Typography variant='h2' gutterBottom sx={{ textAlign: 'center', fontWeight: '400' }}>NewsKreen - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</Typography>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={articles.length !== totalResults ? <Spinner load={'more'} /> : <Spinner load={'done'} />}
                endMessage={
                    <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 3 }}> -  -  -  -  -  -  - X -  -  -  -  -  -  -
                    </Typography>
                }
            >

                <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={5} >
                    {articles.map((e) => {
                        return (
                            <Grid item key={e.url} sx={{ display: 'flex', justifyContent: 'center' }} >
                                <NewsItem title={e.title} desc={e.description} imgURL={e.urlToImage} newsURL={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </Grid>
                        )
                    })}

                </Masonry>

            </InfiniteScroll>

        </Container >
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