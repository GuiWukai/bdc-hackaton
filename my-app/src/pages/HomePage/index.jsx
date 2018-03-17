import React from "react";
import { IdInput } from "../../components";
import patientData from "../../data/patients.json";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {}
    };
  }

  handleSearch = id => {
    patientData.forEach(patient => {
      if (patient._id === id) {
        console.log(patient);
        this.setState({
          patient: patient._id
        });
      }
    });
  };
  render() {
    console.log(this.state.patient);
    return (
      <div>
        <IdInput handleSearch={this.handleSearch} />
      </div>
    );
  }
}
