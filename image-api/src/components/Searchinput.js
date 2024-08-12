import React from "react";



class Searchinput extends React.Component {

    constructor(props) {
        super(props);
        this.state={entry: ''}
     //   this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    //arrow functions will always lead to broken function. they automattically bind the function with this keyword.

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.entry)
        this.props.onSearchSubmit(this.state.entry);
    }


    //event handlers
    // onInputChange, onClick, onChange,

    render() {
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                <div className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input
                                type="text"
                                placeholder='search...'
                                onChange={(event)=> this.setState({entry:event.target.value.toUpperCase()})}
                                value={this.state.entry}
                            />

                            <i className='search icon'></i>
                        </div>
                    </div>
                </div>
                </form>
            </div>

        );
    }
}

export default Searchinput;
