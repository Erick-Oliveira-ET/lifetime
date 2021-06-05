import moment, { Moment } from "moment";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Birthday() {
  // year, month, day, hours, minutes, seconds;
  let birthDateArray = [moment().year() - 1, 4, 6, 8, 4, 21];

  if (moment().month() > 4 || (moment().month() === 4 && moment().date() > 6)) {
    birthDateArray = [moment().year() + 1, 4, 6, 8, 4, 21];
  }

  const birthData = moment(birthDateArray);

  const [years, setYears] = useState<any>();
  const [months, setMonths] = useState<any>();
  const [days, setDays] = useState<any>();
  const [hours, setHours] = useState<any>();
  const [minutes, setMinutes] = useState<any>();
  const [seconds, setSeconds] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setMonths(
        String(Math.abs(Math.floor(moment().diff(birthData, "months"))))
          .padStart(2, "0")
          .split("")
      );

      let tempDate: number | Moment = 0;

      // birthDateArray[2]: day
      if (moment().date() < birthDateArray[2]) {
        tempDate = moment([moment().year(), moment().month(), 6, 8, 4, 21]);

        tempDate = Math.abs(Math.floor(moment().diff(tempDate, "days")));
      } else {
        tempDate = moment([moment().year(), moment().month(), 6, 8, 4, 21]).add(
          1,
          "month"
        );

        tempDate = Math.abs(Math.floor(moment().diff(tempDate, "days")));
      }

      setDays(String(tempDate).padStart(2, "0").split(""));
      setHours(
        String(Math.abs(Math.floor(moment().diff(birthData, "hours") % 24)))
          .padStart(2, "0")
          .split("")
      );
      setMinutes(
        String(Math.abs(Math.floor(moment().diff(birthData, "minutes") % 60)))
          .padStart(2, "0")
          .split("")
      );

      setSeconds(
        String(Math.abs(Math.floor(moment().diff(birthData, "seconds") % 60)))
          .padStart(2, "0")
          .split("")
      );
    }, 1000);
  }, [seconds]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas` Lifetime</title>
        <meta name="description" content="The seconds Nicolas already lived." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <span>
          {months}:{days}:{hours}:{minutes}:{seconds}
        </span>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Erick-Oliveira-ET"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Erick Oliveira
        </a>
      </footer>
    </div>
  );
}
