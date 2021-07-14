import moment, { Moment } from "moment";

// year, month, day, hours, minutes, seconds;
const birthDateArray = [2021, 4, 6, 8, 4, 21];
const birthData = moment(birthDateArray);

export const lifeCounter = {
  years: () => Math.floor(moment().diff(birthData, "years")),
  months: () =>
    String(Math.floor(moment().diff(birthData, "months") % 12))
      .padStart(2, "0")
      .split(""),
  days: () => {
    let tempDate: number | Moment = 0;

    // birthDateArray[2]: day
    if (moment().date() < birthDateArray[2]) {
      tempDate = moment([
        moment().year(),
        moment().month(),
        birthDateArray[2],
        birthDateArray[3],
        birthDateArray[4],
        birthDateArray[5],
      ]).subtract(1, "month");

      tempDate = Math.floor(moment().diff(tempDate, "days"));
    } else {
      tempDate = moment([
        moment().year(),
        moment().month(),
        birthDateArray[2],
        birthDateArray[3],
        birthDateArray[4],
        birthDateArray[5],
      ]);

      tempDate = Math.floor(moment().diff(tempDate, "days"));
    }

    return String(tempDate).padStart(2, "0").split("");
  },
  hours: () =>
    String(Math.floor(moment().diff(birthData, "hours") % 24))
      .padStart(2, "0")
      .split(""),
  minutes: () =>
    String(Math.floor(moment().diff(birthData, "minutes") % 60))
      .padStart(2, "0")
      .split(""),
  seconds: () =>
    String(Math.floor(moment().diff(birthData, "seconds") % 60))
      .padStart(2, "0")
      .split(""),
};
