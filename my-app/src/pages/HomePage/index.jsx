import React from "react";
import { IdInput } from "../../components";
import patients from "../../data/patients.json";
import genotypes from "../../data/genotypes.json";
import genes from "../../data/genes.json";
import phenotypes from "../../data/phenotypes.json";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {
        _id: "",
        genotypes: [],
        nutrigenomics: [],
        pharmacogenetics: [],
        name: "",
        birthday: "",
        gender: "",
        __v: ""
      }
    };
  }

  render() {
    console.log(this.state.patient);
    const { patient } = this.state;
    return (
      <div>
        <IdInput handleSearch={this.handleSearch} />
      </div>
    );
  }
}
