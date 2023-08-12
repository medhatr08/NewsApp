import React,{Component} from "react";
//import PropTypes from 'prop-types';

class  NewsItem extends Component{
   
    render(){
        let {title,description,imageUrl,newsUrl,author,date}=this.props;
        return(
            <div className="conatainer my-3">
                

                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://c.ndtvimg.com/2023-06/4st14ft_us-smoke-canadian-wildfires-afp_625x300_09_June_23.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <a href={newsUrl} target="_blank"><h5 className="card-title">{title}</h5></a>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewsItem