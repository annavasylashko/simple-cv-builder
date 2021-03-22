import React from "react";
import Input from "../Input/Input";
import styles from "../Forms/forms.module.css";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: props.values,
      currentEducation: {
        university: "",
        faculty: "",
        specialty: "",
        admission: "",
        graduation: "",
      },
    };
  }

  continue = (e) => {
    e.preventDefault();

    if (this.state.educations.length === 0) {
      alert("please, provide an education");
      return;
    }

    this.props.nextStep("educations", this.state.educations);
  };

  addEducation = (e) => {
    e.preventDefault();

    let emptyFields = Object.entries(this.state.currentEducation)
      .filter((entry) => entry[1].length === 0)
      .map((entry) => entry[0]);

    if (emptyFields.length > 0) {
      alert("not all fields are filled");
      return;
    }

    this.setState((state) => ({
      educations: [...state.educations, this.state.currentEducation],
      currentEducation: {
        university: "",
        faculty: "",
        specialty: "",
        admission: "",
        graduation: "",
      },
    }));
  };

  handleChange = (inputName) => (e) => {
    let currentEducation = this.state.currentEducation;
    currentEducation[inputName] = e.target.value;

    this.setState({
      currentEducation: currentEducation,
    });
  };

  onEmptyFields = (emptyFields) => {
    console.log(emptyFields);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep("educations", this.state.educations);
  };

  educationsList = () =>
    this.state.educations.map((education, index) => (
      <div className={styles.list} key={index}>
        <p>University: {education.university}</p>
        <p>Faculty: {education.faculty}</p>
        <p>Specialty: {education.specialty}</p>
      </div>
    ));

  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.top}>Education Info</div>
        <form action="">
          <Input
            name="university"
            required
            onChange={this.handleChange("university")}
            defaultValue={this.state.currentEducation.university}
          />
          <Input
            type="text"
            name="faculty"
            onChange={this.handleChange("faculty")}
            defaultValue={this.state.currentEducation.faculty}
            required
          />
          <Input
            type="text"
            name="specialty"
            onChange={this.handleChange("specialty")}
            defaultValue={this.state.currentEducation.specialty}
            required
          />
          <Input
            type="month"
            name="admission"
            onChange={this.handleChange("admission")}
            defaultValue={this.state.currentEducation.admission}
            style={{ height: "5.5rem" }}
            required
          />
          <Input
            type="month"
            name="graduation"
            onChange={this.handleChange("graduation")}
            defaultValue={this.state.currentEducation.graduation}
            style={{ height: "5.5rem" }}
            required
          />

          <div className={styles.btns}>
            <button
              type="button"
              className={styles.backBtn}
              onClick={this.back}
            >
              Back
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={this.addEducation}
            >
              Add
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={this.continue}
            >
              Next
            </button>
          </div>
          <div className={styles.listContainer}>{this.educationsList()}</div>
        </form>
      </div>
    );
  }
}

export default EducationForm;
