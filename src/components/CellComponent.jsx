import React, { Component } from 'react';

class CellComponent extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event);
    }

    render() {
        let cell = null;
        if(this.props.value.initialGiven){
            cell = <span>{this.props.value.value}</span>
        }
        else{
            cell = <input className="cell" type="text" value={this.props.value.value} onChange={this.handleChange}/>
        }

        return (
            <span className="label">
                { cell }
            </span>
        );
    }

}
export default CellComponent;