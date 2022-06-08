import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, desc, imgURL, newsURL, author, date, source } = this.props;
        return (




            <div className="card my-3" style={{ height: '35rem' }}>
                <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">{source}</span>
                <img src={!imgURL ? 'https://news.umanitoba.ca/wp-content/uploads/2022/04/UM-TODAY-image.jpg' : imgURL} className="card-img-top" alt="..." style={{ height: '15rem' }} />
                <div className="card-body" style={{ height: '8rem' }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" >{desc}</p>

                    <a href={newsURL} target='_blank' className="btn btn-sm btn-dark" rel="noreferrer">
                        Read More
                    </a>
                </div>
                <div className="card-footer" >
                    <p><small className="text-muted" style={{ fontSize: '12px' }}>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                </div>
            </div>
        );
    }
}

export default NewsItem;
