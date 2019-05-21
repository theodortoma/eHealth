import React from 'react';
import '../App.css';
import {Component} from 'react';

class DetailsComponent extends Component {

    render() {
        let type = this.props.type;
        let data = this.props.data;

        return (
           <div className="DetailsContainer">
                <div className="DetailsTitle">{type} Details</div>

                <div className="DetailsDataContainer">
                    <div className="DetailsData">
                        {data.map((line) => { return (
                            <div className="DetailsDataName">
                              <b>{line.name}:</b>
                            </div>
                        )})}
                    </div>
                    <div className="DetailsData">
                        {data.map((line) => { return (
                            <div className="DetailsDataValue">
                              {line.value}
                            </div>
                        )})}
                    </div>
                </div>

           </div>
        )
    }
}

export default DetailsComponent;
