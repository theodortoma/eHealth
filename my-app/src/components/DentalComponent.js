import React from 'react';
import '../App.css';
import {Component} from 'react';
import Table from "./Table"
import {Link} from "react-router-dom";
import MapContainer from './MapContainer.js'

class ParaclinicalComponent extends Component {
constructor(props) {
        super(props);
        this.state = {
            searchText : "",
            data : [
                ["Cabinet Stomatologic CRICHEVITZ GH MANICA", "NT", "3.925", "Nu", "12 May 2019"],
                ["C.M.I Dr. Purcar Andrea Constanta", "MS", "0", "Da", "09 May 2019"],
                ["C.M.I Dr. Sabau Camelia Iulia", "BH", "1.467", "Da", "09 May 2019"]
            ],
            showData: [
                ["Cabinet Stomatologic CRICHEVITZ GH MANICA", "NT", "3.925", "Nu", "12 May 2019"],
                ["C.M.I Dr. Purcar Andrea Constanta", "MS", "0", "Da", "09 May 2019"],
                ["C.M.I Dr. Sabau Camelia Iulia", "BH", "1.467", "Da", "09 May 2019"]
            ],
           placeProps: [
                    {name: "Cabinet Stomatologic CRICHEVITZ GH MANICA", position: {lat: 46.973989, lng: 26.377477}, abrev: "IIUBC", index: 0},
                    {name: "C.M.I Dr. Purcar Andrea Constanta", position: {lat: 46.5377221, lng: 24.5586595}, abrev: "MEDLIFE", index: 1},
                    {name: "C.M.I Dr. Sabau Camelia Iulia", position: {lat: 46.9908698, lng: 20.9980301}, abrev: "MEDLIFE-A", index: 2},
            ],
            columns: ["Societate Comerciala", "ValoareContractataLunar", "FondDisponibil"],

        }
    }

    search() {
        let element = document.getElementById("searchName").value;
        let newShowData = this.state.data.filter((line) => {
            return (line[0].indexOf(element) !== -1);
        });
        this.setState({showData : newShowData})
    }

    render() {
        return (
            <div className="ReportContainer">
                <div className="ReportTitle">
                    Search for dental containing the medicine you are looking for
                </div>
                <div className="ReportSearchContainer">

                    <div style={{"margin-right" : "20px"}}>
                        <div className="ReportText">Dental name</div>
                    </div>
                    <input id="searchName"/>
                </div>
                <div className="ReportSearchButton">
                    <div className="ReportText" onClick={() => this.search()}>
                        Search
                    </div>
                </div>

                <div className="ReportsRow">
                     <div className="Map">
                       <MapContainer places={this.state.placeProps}
                                     columns={this.state.columns}
                                     arrayData={this.state.data}/>
                     </div>
                    <div className="ReportsTable">
                        <Table
                            columns={["Societate Comerciala", "Cas", "ValoareContractataLunar", "FondDisponibil", "DataUltimeiRaportari"]}
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

export default ParaclinicalComponent;
