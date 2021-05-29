import moment from "moment";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  //[year,month,day,hours,minutes,seconds]
  const birthData = moment([2021, 4, 6, 8, 4, 21]);

  // const [years, setYears] = useState<any>();
  // const [months, setMonths] = useState<any>();
  // const [days, setDays] = useState<any>();
  // const [hours, setHours] = useState<any>();
  // const [minutes, setMinutes] = useState<any>();
  const [seconds, setSeconds] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      // setYears(moment().diff(birthData, "years"));
      // setMonths(Math.floor(moment().diff(birthData, "months") % 12));
      // setDays(Math.floor(moment().diff(birthData, "days") % 30));
      // setHours(Math.floor(moment().diff(birthData, "hours") % 24));
      // setMinutes(Math.floor(moment().diff(birthData, "minutes") % 60));

      console.log(birthData);
      setSeconds(moment().diff(birthData, "seconds"));
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
        {/* {years !== "0" && years > 0 && (
          <>
            <span>{years}</span>
            <span>:</span>
          </>
        )}
        {months !== "0" && months > 0 && (
          <>
            <span>{months}</span>

            <span>:</span>
          </>
        )}
        {days !== "0" && days > 0 && (
          <>
            <span>{days}</span>

            <span>:</span>
          </>
        )}
        {hours !== "0" && hours > 0 && (
          <>
            <span>{hours}</span>

            <span>:</span>
          </>
        )}
        {minutes !== "0" && minutes > 0 && (
          <>
            <span>{minutes}</span>

            <span>:</span>
          </>
        )} */}
        <span>{seconds}</span>
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
