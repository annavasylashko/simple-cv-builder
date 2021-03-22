import React from "react";
import IdentityForm from "../IdentityForm/IdentityForm";
import EducationForm from "../EducationForm/EducationForm";
import WorkForm from "../WorkForm/WorkForm";
import ResultResume from "../ResultResume/ResultResume";

class Forms extends React.Component {
  state = {
    step: 1,

    identity: {
      firstName: "",
      lastName: "",
      currPosition: "",
      email: "",
      phone: "",
    },

    educations: [],

    works: [],
  };

  nextStep = (type, value) => {
    const { step } = this.state;
    this.setState({
      [type]: value,
      step: step + 1,
    });
  };

  prevStep = (type, value) => {
    const { step } = this.state;
    this.setState({
      [type]: value,
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;
    const { ...state } = this.state;

    const values = {
      ...state,
    };

    switch (step) {
      case 1:
        return (
          <IdentityForm nextStep={this.nextStep} values={values.identity} />
        );
      case 2:
        return (
          <EducationForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values.educations}
          />
        );
      case 3:
        return (
          <WorkForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values.works}
          />
        );
      case 4:
        return <ResultResume values={values} />;
      default:
        return;
    }
  }
}

export default Forms;
