import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Footer from './Footer';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    //console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    console.log('From the app', video);
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="u-backgroundLightest" style={{minHeight: '100vh'}}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        
        <div className="u-paddingVerticalLarge u-backgroundWhite">
          <div className="Container">
            <div className="Grid">
              <div className="u-size8of12">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="u-size4of12">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App;