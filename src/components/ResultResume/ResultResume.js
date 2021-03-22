import React from "react";
import DateFormatter from "./DateFormatter";
import styles from "./resultResume.module.css";
import educationImg from "../../img/education.png";
import experienceImg from "../../img/experience2.png";

class ResultResume extends React.Component {
  render() {
    const { values } = this.props;
    const formattedDate = (date) => DateFormatter.formatDate(date);

    const formatEducations = () => {
      return this.props.values.educations.map((education) => (
        <div>
          <p className={styles.resumeDate}>
            {formattedDate(education.admission)} -{" "}
            {formattedDate(education.graduation)}
          </p>
          <h3 className={styles.resumePlace}>{education.university}</h3>
          <p className={styles.resumePlaceDetails}>
            {education.faculty} {education.specialty}
          </p>
        </div>
      ));
    };

    const formatWorks = () => {
      return this.props.values.works.map((work) => (
        <div>
          <p className={styles.resumeDate}>
            {formattedDate(work.start)} - {formattedDate(work.finish)}
          </p>
          <h3 className={styles.resumePlace}>{work.company}</h3>
          <p className={styles.resumePlaceDetails}>{work.position}</p>
        </div>
      ));
    };

    return (
      <div className={styles.resultContainer}>
        <div className={styles.resumeLeft}>
          <p className={styles.contacts}>
            <b>Call</b> {values.identity.phone}
            <br />
            <b> Email</b> {values.identity.email}
          </p>

          <div className={styles.resumeComponents}>
            <div className={styles.resumeTitle}>
              <img src={educationImg} alt="icon" />
              <h2>EDUCATION</h2>
            </div>
            {formatEducations()}
          </div>

          <div className={styles.resumeComponents}>
            <div className={styles.resumeTitle}>
              <img src={experienceImg} className={styles.exIcon} alt="icon" />
              <h2>EXPERIENCE</h2>
            </div>
            {formatWorks()}
          </div>
        </div>

        <div className={styles.resumeRight}>
          <p className={styles.userFirstName}>{values.identity.firstName}</p>
          <p className={styles.userLastName}>{values.identity.lastName}</p>
          <p className={styles.userPosition}>{values.identity.currPosition}</p>
        </div>
      </div>
    );
  }
}

export default ResultResume;
