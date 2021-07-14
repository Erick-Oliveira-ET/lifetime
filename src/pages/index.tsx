import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { lifeCounter } from "@/utils/home";

interface InitialVariablesProps {
  initialVariables: {
    years: string;
    months: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export default function Home({ initialVariables }: InitialVariablesProps) {
  const [years, setYears] = useState<any>(initialVariables.years);
  const [months, setMonths] = useState<any>(initialVariables.months);
  const [days, setDays] = useState<any>(initialVariables.days);
  const [hours, setHours] = useState<any>(initialVariables.hours);
  const [minutes, setMinutes] = useState<any>(initialVariables.minutes);
  const [seconds, setSeconds] = useState<any>(initialVariables.seconds);

  useEffect(() => {
    setTimeout(() => {
      setYears(lifeCounter.years());
      setMonths(lifeCounter.months());
      setDays(lifeCounter.days());
      setHours(lifeCounter.hours());
      setMinutes(lifeCounter.minutes());
      setSeconds(lifeCounter.seconds());
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
export function getServerSideProps() {
  return {
    props: {
      initialVariables: {
        years: lifeCounter.years(),
        months: lifeCounter.months(),
        days: lifeCounter.days(),
        hours: lifeCounter.hours(),
        minutes: lifeCounter.minutes(),
        seconds: lifeCounter.seconds(),
      },
    },
  };
}
