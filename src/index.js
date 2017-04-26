import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar.js';
import VideoList from './components/videoList.js';

const youtubeAPIKey = 'AIzaSyDKZmV8dhVT6pA6RRaw5WFFueH3u-JP9Ls';

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {videos:[]};

		YTSearch({key: youtubeAPIKey, term: 'surfboards'}, (videos) => {
			this.setState({videos});
			//resolves to this.setState({videos: videos})

		});
	}
	render(){
		return(
			<div>
				<h1>My Happy Youtube</h1>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));