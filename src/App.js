import React from 'react';
import './App.css';
import NewsList from './components/NewsList';
import Spinner from './components/Spinner';

const mainUrl = 'https://hacker-news.firebaseio.com';
const numberOfNews = 100;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      timerId: null,
      fetched: false
    };
  }

  componentDidMount () {
    this.setPolling();
  }

  componentWillMount () {
    this.unsetPolling();
  }


  setPolling = async () => {
    await this.fetchData();

    const timerId = setInterval(this.fetchData, 60000);

    this.setState({ timerId });
  }

  fetchData = async () => {
    
    const articleIds = await fetch(`${mainUrl}/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=${numberOfNews}`).then(data => data.json());
    
    const articles = await Promise.all(
      articleIds.map(articleId => {
        return fetch(`${mainUrl}/v0/item/${articleId}.json`).then(data => data.json());
      })
    );

    this.setState({ articles , fetched: true });
  }

  unsetPolling = () => {
    clearInterval(this.state.timerId);
  }

  render() {
    const { fetched, articles } = this.state;

    return (
      <>
        {fetched
          ? (<>
              <NewsList articles={articles} />
              <button onClick={this.fetchData}>Нажималка</button>
             </>)
          : <Spinner />}
      </>
    );
  }
}


export default App;
