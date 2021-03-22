import React from "react";
import Input from "../Input/Input";
import { validate } from "../Validation/Validation";
import styles from "../Forms/forms.module.css";

class IdentityForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.values;
  }

  continue = (e) => {
    e.preventDefault();

    let invalidFields = Object.entries(this.state)
      .filter((entry) => !validate(entry[0], entry[1]))
      .map((entry) => entry[0]);

    if (invalidFields.length > 0) {
      alert("not all fields are valid");
      return;
    }

    this.props.nextStep("identity", this.state);
  };

  handleChange = (inputName) => (e) => {
    this.setState({
      [inputName]: e.target.value,
    });
  };

  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.top}>User Info</div>
        <form action="">
          <Input
            type="text"
            name="first name"
            onChange={this.handleChange("firstName")}
            defaultValue={this.state.firstName}
          />
          <Input
            type="text"
            name="last name"
            onChange={this.handleChange("lastName")}
            defaultValue={this.state.lastName}
          />
          <Input
            type="text"
            name="current position"
            onChange={this.handleChange("currPosition")}
            defaultValue={this.state.currPosition}
          />
          <Input
            type="email"
            name="email"
            onChange={this.handleChange("email")}
            defaultValue={this.state.email}
          />
          <Input
            type="tel"
            name="phone"
            onChange={this.handleChange("phone")}
            defaultValue={this.state.phone}
          />
          <div className={styles.btns}>
            <input
              type="submit"
              className={styles.submitBtn}
              onClick={this.continue}
              value="Confirm"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default IdentityForm;
