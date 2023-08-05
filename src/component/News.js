import React, { useEffect ,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

const News=(props)=>{  


  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=02e5ef6a0ccb481fac1b21259f1dafc2&pageSize=${
      props.pageSize}&page=${page}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
}

useEffect(() => {
    updateNews(); 
    
    // eslint-disable-next-line 
},[props.country])

  const handlePreviousClick = async () => {
    console.log("prev");
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=02e5ef6a0ccb481fac1b21259f1dafc2&pageSize=${
      props.pageSize
    }&page=${page - 1}`;
    setloading(true)
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)
    setpage(page-1)

    props.setProgress(100);
  };


 const handleNextClick = async () => {
    console.log("next");
   
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=02e5ef6a0ccb481fac1b21259f1dafc2&pageSize=${
        props.pageSize
      }&page=${page + 1}`;

      setloading(true)
      props.setProgress(30);
      let data = await fetch(url);
      props.setProgress(70);
      let parsedData = await data.json();
      setarticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setloading(false)
      setpage(page+1)
      props.setProgress(100);
    }
  


    return (
      <>
        <div className="container ">
          <h2 style={{ textAlign: "center",margin:"80px" }}>News Hunter-Top Headlines</h2>
          {loading && <Spinner />}

          <div className="row">
            {!loading && articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                    }
                    newsurl={element.url}
                    author={element.author} 
                    date={element.publishedAt} 
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between my-3">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={handlePreviousClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
              type="button"
              className="btn btn-dark"
              onClick={handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
  );
  
  }


News.defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
