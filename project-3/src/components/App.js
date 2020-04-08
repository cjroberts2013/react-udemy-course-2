import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from './../apis/youtube'


class App extends Component {
    state = { videos: [], selectedVideo: null };


    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items })
    }

    onVideoSelect = video => {
        console.log('From the app!', video)
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App