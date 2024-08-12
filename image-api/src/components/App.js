import React from 'react';
import Searchinput from "./Searchinput";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: []}
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    // onSearchSubmit(entry) {
    //     console.log('Search submitted:', entry);
    //     axios.get(`https://pixabay.com/api/?key=45377558-006616b7dd0bb1d19c920c23e&q=${entry}&image_type=photo&pretty=true`)
    // }

    async onSearchSubmit(entry) {
        console.log('Search submitted:', entry);
        await axios.get(`https://pixabay.com/api/?key=45377558-006616b7dd0bb1d19c920c23e&q=${entry}&image_type=photo&pretty=true`)
            .then(response => {
                this.setState({images: response.data.hits})

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


    render() {
        return (
            <div className='ui container' style={{marginTop: '30px'}}>
                <Searchinput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images = {this.state.images}/>
            </div>
        );
    }
}

export default App;
