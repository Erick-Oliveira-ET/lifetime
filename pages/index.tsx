import moment, { Moment } from "moment";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  // year, month, day, hours, minutes, seconds;
  const birthDateArray = [2021, 4, 6, 8, 4, 21];
  const birthData = moment(birthDateArray);

  const [years, setYears] = useState<any>();
  const [months, setMonths] = useState<any>();
  const [days, setDays] = useState<any>();
  const [hours, setHours] = useState<any>();
  const [minutes, setMinutes] = useState<any>();
  const [seconds, setSeconds] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setYears(Math.floor(moment().diff(birthData, "years")));

      setMonths(
        String(Math.floor(moment().diff(birthData, "months") % 12))
          .padStart(2, "0")
          .split("")
      );

      let tempDate: number | Moment = 0;

      // birthDateArray[2]: day
      if (moment().date() < birthDateArray[2]) {
        tempDate = moment([
          moment().year(),
          moment().month(),
          6,
          8,
          4,
          21,
        ]).subtract(1, "month");

        tempDate = Math.floor(moment().diff(tempDate, "days"));
      } else {
        tempDate = moment([moment().year(), moment().month(), 6, 8, 4, 21]);

        tempDate = Math.floor(moment().diff(tempDate, "days"));
      }

      setDays(String(tempDate).padStart(2, "0").split(""));
      setHours(
        String(Math.floor(moment().diff(birthData, "hours") % 24))
          .padStart(2, "0")
          .split("")
      );
      setMinutes(
        String(Math.floor(moment().diff(birthData, "minutes") % 60))
          .padStart(2, "0")
          .split("")
      );

      setSeconds(
        String(Math.floor(moment().diff(birthData, "seconds") % 60))
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
          {years}:{months}:{days}:{hours}:{minutes}:{seconds}
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
