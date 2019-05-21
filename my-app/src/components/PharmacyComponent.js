import React from 'react';
import '../App.css';
import {Component} from 'react';
import map from "../map.jpg"
import Table from "./Table"
import {Link} from "react-router-dom";

class PharmacyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : "",
            data : [
                ["Catena", "Unirii Bd. Unirii Nr1.", "321"],
                ["Catena", "Str. Calea Crangasi", "143"],
                ["HelpNet", "Bd. Uverturii Nr2", "38"]
            ],
            showData: [
                ["Catena", "Unirii Bd. Unirii Nr1.", "321"],
                ["Catena", "Str. Calea Crangasi", "143"],
                ["HelpNet", "Bd. Uverturii Nr2", "38"]
            ]
        }
    }

    searchTextChange(input) {
        this.setState({searchText: input.target.value});
        console.log(this.state.searchText);

    }

    search() {
        let newShowData = this.state.data.filter((line) => {
            return (line[0].indexOf(this.state.searchText) !== -1);
        });
        this.setState({showData : newShowData})
    }

    render() {
        return (
            <div className="ReportContainer">
                <div className="ReportTitle">
                    Search for pharmacies containing the medicine you are looking for
                </div>
                <div className="ReportSearchContainer">

                    <div style={{"margin-right" : "20px"}}>
                        <div className="ReportText">Pharmacy name</div>
                    </div>
                    <input onChange={(input) => {this.searchTextChange(input)}}/>
                </div>
                <div className="ReportSearchButton">
                    <div className="ReportText" onClick={() => this.search()}>
                        Search
                    </div>
                </div>

                <div className="ReportsRow">
                    <img className="ReportMap" src={map} />
                    <div className="ReportsTable">
                        <Table
                            columns={["Name", "Address", "Number of medications "]}
                            data = {this.state.showData}
                            changeDetailsData={(newType, newData) => {this.props.changeDetailsData(newType, newData)}}
                        />
                    </div>
                </div>
                <div className="ReportSearchButton" style={{"margin-top" : "30px"}}>
                    <Link className="ReportText" to="/home">
                        Home
                    </Link>
                </div>
            </div>
        )
    }
}

export default PharmacyComponent;
