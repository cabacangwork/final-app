import React, { Component } from 'react';

class GifGenerator extends Component {

    state = {
        img: [],
        searchTxt: '',
        loading:false
    }

    changeTxt = (e) => {
        this.setState({searchTxt: e.target.value})
    }

    searchGiphy = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTxt}&api_key=3xIt17b7YT1HlbvajEwlqFRrIQKvt1ul&limit=5`)
            .then(res => res.json())
            .then(img => this.setState({img: img.data, loading:false}))
            .then(this.setState({searchTxt:''}))
            .catch(err => console.log(err));
    }

    render() {
        const { img, searchTxt, loading } = this.state;
        const test = [];
        img.forEach((item,index) => test.push(
            <p key={index}><img src={item.images.downsized.url}/><br/></p>
        ))
        return(
            <div className="recipe container">
                <h2>GIF Generator</h2>
                <form onSubmit={this.searchGiphy}>
                    <input name="searchTxt" value={searchTxt} onChange={this.changeTxt} placeholder="Keyword" required />
                    <button type="submit">Search</button>
                </form>
                <br/>
                {loading? <p>Loading..</p>: test}
            </div>
        );

    }

}

export default GifGenerator;
