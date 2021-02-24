import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar'
import styles from '../styles/pages/Home.module.css';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChalllangeBox } from '../components/ChalllangeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChalllangeBox/>
        </div>
      </section>
    </div>)
}
