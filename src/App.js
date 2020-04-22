import React from 'react';
import './App.css';
import InputField from './components/InputField';
import logo from './images/logo.png';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      originalUrl: '',
      shortUrl: 'Your shortened URL will appear here! 😎'
    }
  }

  onInput = (event) => {
    this.setState({originalUrl: event.target.value});
  }

  shorten = () => {
    if(this.state.originalUrl !== ''){
      const baseURL = 'https://api.shrtco.de/v2/shorten?url=' + this.state.originalUrl;
    fetch(baseURL)
    .then(resp => resp.json())
    .then(data => {
        let output = data.result.short_link
        this.setState({shortUrl:output})
    }).catch(() =>{
      this.setState({shortUrl: `Please ensure that you have provided a valid link.🙄`})
    });
    }
    else{
      this.setState({attention: 'animated zoomInLeft'})
    }
  }

  render(){
    let {shortUrl} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <div className='tc ma4 logo'><img alt='logo' src={logo}/></div>
          <InputField attention={this.state.attention} onInput={this.onInput}/>
          <div className='tc ma3 white'>
            <ul>
              <li style={{listStyle: 'none'}}>Format: https://your/long/url/</li>
            </ul>
          </div>
            <a className='tc fw6 db  link white hover-light-pink' href={shortUrl}><h1>{shortUrl}</h1></a>
          <div className='tc'>
            <button className='btn btn-primary btn-lg ma4' onClick={this.shorten}>Make it Short</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
