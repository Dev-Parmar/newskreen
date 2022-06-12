import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, desc, imgURL, newsURL, author, date, source } = this.props;
        return (




            <div className="card my-5" style={{ height: '35rem', border: '1px solid #9b4196' }}>
                <span className="position-absolute top-0 start-50 translate-middle badge bg-warning" style={{ border: '1px solid #9b4196' }}>{source}</span>
                <img src={!imgURL ? 'https://i.ibb.co/d5fKBwb/default.png' : imgURL} className="card-img-top p-2" alt="..." style={{ height: '15rem', borderBottom: '1px solid #9b4196' }} />
                <div className="card-body" style={{ height: '8rem' }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" >{desc}</p>

                    <a href={newsURL} target='_blank' className="btn btn-sm btn-dark" rel="noreferrer" style={{ border: '1px solid #9b4196' }}>
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
