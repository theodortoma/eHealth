import React from 'react';
import '../App.css';
import {Component} from 'react';
import {Link} from "react-router-dom";

class Table extends Component {

    setDetails(line) {
      let detailsData = [];
      for (let i = 0; i < this.props.columns.length; i++) {
        detailsData.push({name: this.props.columns[i], value: line[i]});
      }
      this.props.changeDetailsData("Pharmacy", detailsData);
    }

    render() {
        let columnsName = this.props.columns;
        let data = this.props.data;


        return (
            <table className="TableContainer">
                <tr>
                    <th className="TableTitle">Actions</th>
                    {columnsName.map(name => {
                        return (<th className="TableTitle">{name}</th>)
                    })}
                </tr>
                {data.map(line => {
                    return (
                        <tr>
                            <td className="TableTitle">
                                <Link
                                  to="/details"
                                  onClick={() => {this.setDetails(line)}}
                                >
                                  View
                                </Link>
                            </td>
                            {line.map(name => {
                                return (<td className="TableTitle">{name}</td>)
                            })}
                        </tr>
                    )
                })}
            </table>
        )
    }
}

export default Table;
