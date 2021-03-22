export default class DateFormatter {
  static monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  static formatDate(date) {
    let newDate = new Date(date);
    let month = this.monthNames[newDate.getMonth()];
    let year = newDate.getFullYear();

    return `${month} ${year}`;
  }
}
