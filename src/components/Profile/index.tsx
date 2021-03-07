import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gustavomaltez.png" alt="Gustavo Maltez" />
      <div>
        <strong>Gustavo Maltez</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
