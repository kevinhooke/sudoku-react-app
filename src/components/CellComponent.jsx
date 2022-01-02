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
            cell = <div>{this.props.value.value}</div>
        }
        else{
            cell = <input className="cell" type="text" value={this.props.value.value} onChange={this.handleChange}/>
        }

        return (
            <div className="label">
                { cell }
            </div>
        );
    }

}
export default CellComponent;