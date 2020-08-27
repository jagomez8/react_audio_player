import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from '@dalanke/react-audio-player';

const testPlaylist = {
  name: 'Temp Playlist',
  description: '',
  musics: [
    {
      src: 'https://stayhome-api.herokuapp.com/stream?id=HdQCWXh3XXU',
      title: 'STYX HELIX ',
      author: 'Re：ゼロから始める異世界生活 ED1',
      thumbnail: 'https://i.ytimg.com/vi/HdQCWXh3XXU/maxresdefault.jpg',
    },
    {
      src: 'https://stayhome-api.herokuapp.com/stream?id=E8S2IHiuWZA',
      title: 'Kizuna Music キズナミュージック♪ [Piano+Sheet]',
      author: 'Poppin Party',
      thumbnail: '',
    },
    {
      src: "https://stayhome-api.herokuapp.com/stream?id=WWB01IuMvzA",
      title: "God knows... ''The Melancholy of Haruhi Suzumiya'' 【涼宮ハルヒの憂鬱】Kadokawa公認MAD【ﾍﾞｰｽ 演奏】",
      author: "SOS Brigade",
      thumbnail: "https://i.ytimg.com/vi/WWB01IuMvzA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBVz-uanELhyY853jE2iZfKeW3_DA"
    },
    {
      src : "https://stayhome-api.herokuapp.com/stream?id=5jxRt7ZNS3o",
      title : "【公式ライブ映像】Poppin'Party「走り始めたばかりのキミに」／BanG Dream! 5th☆LIVE Day1:Poppin’Party HAPPY PARTY 2018!",
      author : "バンドリちゃんねる☆",
      thumbnail : "https://i.ytimg.com/vi/5jxRt7ZNS3o/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAgqntiJUNRWyrjDu5TGf3OJsbSJw"
  }
  ],
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: testPlaylist,
      hidePlayer: false,
    };
  }

  shufflePlaylist = (callback) => {
    const copyList = [...this.state.playlist.musics];
    for (let i = copyList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyList[i], copyList[j]] = [copyList[j], copyList[i]];
    }

    // we need reset the current index after shuffle, pass the call back in here
    this.setState({ playlist: { ...this.state.playlist, musics: copyList } }, callback);
  }

  // remove a song from current playlist
  removeFromPlaylist = (index) => {
    const copyList = [...this.state.playlist.musics];
    copyList.splice(index, 1);
    this.setState({ playlist: { ...this.state.playlist, musics: copyList } });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Player
            playlist={this.state.playlist}
            shufflePlaylist={this.shufflePlaylist}
            removeFromPlaylist={this.removeFromPlaylist}
            hide={this.state.hidePlayer}
          />
        </header>
      </div>
    );
  }
}

export default App;
