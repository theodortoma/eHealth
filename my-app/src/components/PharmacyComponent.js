import React from 'react';
import '../App.css';
import {Component} from 'react';
import map from "../map.jpg"
import Table from "./Table"
import {Link} from "react-router-dom";
import MapContainer from './MapContainer.js'


class PharmacyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText : "",
            data : [
                ["SC BN SIND BALNEO TURISM SRL Bucuresti.", "MM", "0", "Da", "-", "09 May 2019"],
                ["[11655090] SC GREEN TOP SRL", "B", "0", "Da", "-", "09 May 2019"],
                ["[12341923] FUNDATIA MEDICALA \" SPERANTA BOLNAVILOR\" BARTICESTI", "NT", "0", "Da", "-", "09 May 2019"]
            ],
            showData: [
                ["SC BN SIND BALNEO TURISM SRL Bucuresti.", "MM", "0", "Da", "-", "09 May 2019"],
                ["[11655090] SC GREEN TOP SRL", "B", "0", "Da", "-", "09 May 2019"],
                ["[12341923] FUNDATIA MEDICALA \" SPERANTA BOLNAVILOR\" BARTICESTI", "NT", "0", "Da", "-", "09 May 2019"]
            ],
            placeProps: [
                {name: "SC BN SIND BALNEO TURISM SRL Bucuresti", position: {lat: 47.7794585, lng: 23.9411193}, abrev: "IIUBC", index: 0},
                {name: "[11655090] SC GREEN TOP SRL", position: {lat: 44.444106, lng: 26.0692048}, abrev: "MEDLIFE", index: 1},
                {name: "[12341923] FUNDATIA MEDICALA \" SPERANTA BOLNAVILOR\" BARTICESTI", position: {lat: 44.4712153, lng: 26.1331023}, abrev: "MEDLIFE-A", index: 2},
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
                    Search for pharmacies containing the medicine you are looking for
                </div>
                <div className="ReportSearchContainer">

                    <div style={{"margin-right" : "20px"}}>
                        <div className="ReportText">Pharmacy name</div>
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
                            columns={["Societate Comerciala", "Cas", "ValoareContractataLunar", "FondDisponibil", "DataEpuizariiFondului", "DataUltimeiRaportari"]}
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
