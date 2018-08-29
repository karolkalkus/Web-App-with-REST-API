import React from "react";
import Collapse from "./Collapse";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      articles: [],
      select: true,
    };
  }

  componentDidMount() {
    this.fetchData();
    
  }

  fetchData() {

    const apiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=8707b4f175b54f48aab162a22ac2e73f";

    fetch(apiUrl)
      .then(r => r.json())
      .then(data =>
        data.articles.map(article => ({
          title: article.title,
          description: article.description,
          url: article.url,
          img: article.urlToImage,
          date: article.publishedAt,
        }))
      )
      .then(articles =>
        this.setState({
          articles,
          isLoading: false,
        })
      )
      .catch(error => console.log("parsing faild", error));
  }

  render() {
    const {isLoading, articles} = this.state;

    

    if (isLoading) {
      return <h1> Wait a minute.. </h1>;
    }else{
      console.log(this.state.articles);
    
    return (
      <div>
        <header>
          <img />
          <h1 className='upper'>Breaking News</h1>
        </header>
        <div className="content">
          <div className="panel-group">
          {
            !isLoading && articles.length > 0 ? articles.map((article, i) => {
              return <Collapse key={i} title={article.title}>
              <img src={article.img} alt="article image"/>
              <p>{article.description}</p>
              <div className='footer'>Published at: {article.date.substr(0, 10)}<a className='link' href={article.url} target='_blank' >Want more? Check it!</a></div>
            </Collapse>
            }) : null
          }
          </div>
        </div>
      </div>
    );
  }
  }
}


export default App;
