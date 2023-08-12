import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

class NewsComponent extends Component {
    // static defaultProps={
    //     category:'general',

    // }
    // static PropTypes={
    //     category:PropTypes.string,
    // }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title = `DailyNews-Top Headlines ${this.props.category}`;
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2bc9a45a2be24abc8c14e62b22437d75&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading:false,
        })

    }
    async componentDidMount() {
        this.updateNews();


    }
    handlePreviousClick = async () => {
        this.setState({page: this.state.page - 1});
        this.updateNews();


    }
    handleNextClick = async () => {
        this.setState({page: this.state.page + 1})
            this.updateNews();
    }
    fetchMoreData = async() => {
        this.setState({
            page:this.state.page+1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2bc9a45a2be24abc8c14e62b22437d75&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            
        })
    }



    
    render() {
        return (
            <>
                <h1 className="text-center">DailyNews-Top {this.props.category} HeadLines </h1>
            {this.state.loading &&<Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!=this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((ele) => {
                            return <div className="col-md-4" key={ele.url}>
                                <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
               
            </>
        );
    }
}
export default NewsComponent