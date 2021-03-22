import React from "react";
import Input from "../Input/Input";
import styles from "../Forms/forms.module.css";

class WorkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: props.values,
      currentWork: {
        position: "",
        start: "",
        finish: "",
        company: "",
      },
    };
  }

  continue = (e) => {
    e.preventDefault();

    if (this.state.works.length === 0) {
      alert("please, provide an work");
      return;
    }

    this.props.nextStep("works", this.state.works);
  };

  addWork = (e) => {
    e.preventDefault();

    let emptyFields = Object.entries(this.state.currentWork)
      .filter((entry) => entry[1].length === 0)
      .map((entry) => entry[0]);

    if (emptyFields.length > 0) {
      alert("not all fields are filled");
      return;
    }

    this.setState((state) => ({
      works: [...state.works, this.state.currentWork],
      currentWork: {
        position: "",
        start: "",
        finish: "",
        company: "",
      },
    }));
  };

  handleChange = (inputName) => (e) => {
    let currentWork = this.state.currentWork;
    currentWork[inputName] = e.target.value;

    this.setState({
      currentWork: currentWork,
    });
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep("works", this.state.works);
  };

  worksList = () =>
    this.state.works.map((work, index) => (
      <div className={styles.list} key={index}>
        <p>Company: {work.company}</p>
        <p>Position: {work.position}</p>
      </div>
    ));

  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.top}>Work Info</div>
        <form action="">
          <Input
            name="position"
            required
            onChange={this.handleChange("position")}
            defaultValue={this.state.currentWork.position}
          />
          <Input
            name="company"
            required
            onChange={this.handleChange("company")}
            defaultValue={this.state.currentWork.company}
          />
          <Input
            type="month"
            name="start"
            onChange={this.handleChange("start")}
            defaultValue={this.state.currentWork.start}
            style={{ height: "5.5rem" }}
            required
          />
          <Input
            type="month"
            name="finish"
            onChange={this.handleChange("finish")}
            defaultValue={this.state.currentWork.finish}
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
              onClick={this.addWork}
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
          <div className={styles.listContainer}>{this.worksList()}</div>
        </form>
      </div>
    );
  }
}

export default WorkForm;
