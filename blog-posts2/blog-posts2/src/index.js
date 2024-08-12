import React from 'react';
import ReactDOM from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay';
import pic from './image/pic.png';
import SingleComment from "./SingleComment";
import NameCard from "./NameCard";






// const App = () =>{
//
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => console.log(position),
//             (error) => console.log(error)
//         );
//     return(
//         // <div>
//         //     <NameCard> <SingleComment name="Kumar" dateValue ="Value" texts="First Name"/></NameCard>
//         //
//         //     <NameCard> <SingleComment name="Vinoth" dateValue ="Value"texts="First Name"/> </NameCard>
//         // </div>
//         <div>
//             Hello world
//         </div>
//     )
// }


// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )

class App extends React.Component {
    state = { latitude: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    render() {
        // Check if there's an error and no latitude value
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        // Check if there's latitude and no error
        if (!this.state.errorMessage && this.state.latitude) {
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>;
        }
        // Otherwise, show loading message
        return <div>Loading...</div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

