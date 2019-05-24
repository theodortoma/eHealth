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
                ["Institutul Inimii de Urg pt boli cardiovasculare", "CJ", "2.098", "558", "09 May 2019", "3", "NU", "DA"],
                ["SC MEDLIFE SA", "B", "0", "-111.612", "30 May 2019", "0", "DA", "NU"],
                ["SC MEDLIFE SA analize", "B", "0", "-63.986", "30 May 2019", "6", "DA", "NU"]
            ],
            showData: [
                ["Institutul Inimii de Urg pt boli cardiovasculare", "CJ", "2.098", "558", "09 May 2019", "3", "NU", "DA"],
                ["SC MEDLIFE SA", "B", "0", "-111.612", "30 May 2019", "0", "DA", "NU"],
                ["SC MEDLIFE SA analize", "B", "0", "-63.986", "30 May 2019", "6", "DA", "NU"]
            ],
            placeProps: [
                {name: "Institutul Inimii de Urg pt boli cardiovasculare", position: {lat: 46.7667756, lng: 23.5833312}, abrev: "IIUBC", index: 0},
                {name: "SC MEDLIFE SA", position: {lat: 44.4247698, lng: 26.0464168}, abrev: "MEDLIFE", index: 1},
                {name: "SC MEDLIFE SA Analize", position: {lat: 44.4443281, lng: 26.0756528}, abrev: "MEDLIFE-A", index: 2},
            ],
            columns: ["Societate Comerciala", "ValoareContractataLunar", "FondDisponibil"],
        }
    }

    searchTextChange(input) {
        this.setState({searchText: input.target.value});
        console.log(this.state.searchText);

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
                    Search for paraclinics containing the medicine you are looking for
                </div>
                <div className="ReportSearchContainer">

                    <div style={{"margin-right" : "20px"}}>
                        <div className="ReportText">Paraclinic name</div>
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
                            columns={["Societate Comerciala", "Cas", "ValoareContractataLunar", "FondDisponibil", "DataUltimeiRaportari",
                            "CazuriProgramate", "ServiciiLaborator", "ServiciiImagistica"]}
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
