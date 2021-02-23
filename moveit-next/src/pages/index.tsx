import { ExperienceBar } from '../components/ExperienceBar'
import styles from '../styles/pages/Home.module.css';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
      </section>
    </div>)
}