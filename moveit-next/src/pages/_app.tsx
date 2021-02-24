import { ChallengesContext } from '../contexts/ChallengesContext'
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider>
      <Component {...pageProps} />
   </ChallengesContext.Provider>
    )
}

export default MyApp;
