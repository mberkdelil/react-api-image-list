import SearchBar from "./SearchBar";
import axios from 'axios';
import { Component } from "react";
import ImageList from "./ImageList";


class App extends Component {

  state = { images: [] };

  onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=21961130-192e072da7fb30043e0fcc703&q=${entry}&image_type=photo`);
    this.setState({ images: response.data.hits })
  }


  render() {

    return (
      <div className="ui container" style={{ marginTop: '30px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      We have {this.state.images.length} images.
      <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
