import React from 'react';
import './App.css';
import {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home"
import PharmacyComponent from "./components/PharmacyComponent"
import ParaclinicalComponent from "./components/ParaclinicalComponent"
import DetailsComponent from "./components/DetailsComponent";
import DentalComponent from "./components/DentalComponent";

import MapContainer from './components/MapContainer.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType : "",
      detailsData: {},
    }
  }

  changeDetailsData(newType, newData) {
      this.setState({selectedType : newType, detailsData : newData});
      console.log("ASDASD");
  }

  render() {
      return <div className="App">
          <div className="App-header">
            <Switch>
                  <Route path={"/"} exact render={() =>
                      <Home/>}
                  />
                  <Route path={"/home"}  render={() =>
                      <Home/>}
                  />
                  <Route path={"/pharmacy"}  render={() =>
                      <PharmacyComponent
                        changeDetailsData={(newType, newData) => this.changeDetailsData(newType, newData)}
                      />}
                  />
                  <Route path={"/paraclinical"}  render={() =>
                      <ParaclinicalComponent
                        changeDetailsData={(newType, newData) => this.changeDetailsData(newType, newData)}
                      />}
                  />
                  {/*<Route path={"/recovery"} exact render={() =>*/}
                      {/*<RecoveryComponent/>}*/}
                  {/*/>*/}
                  <Route path={"/dental"} exact render={() =>
                      <DentalComponent
                          changeDetailsData={(newType, newData) => this.changeDetailsData(newType, newData)}
                        />}
                  />
                  <Route path={"/details"} render={() =>
                      <DetailsComponent
                        type={this.state.selectedType}
                        data={this.state.detailsData}
                      />}
                  />
             </Switch>
          </div>
      </div>
  }
}

export default App;
