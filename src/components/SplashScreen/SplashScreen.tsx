import logoHorizontal from '../../assets/brand-logo-horizontal.svg'
import logo from '../../assets/ra-logo.png'
import ProgressBar from '../ProgressBar/ProgressBar'
import './SplashScreen.css'

interface SplashScreenProps {
  completed: number
}

const SplashScreen: React.FC<SplashScreenProps> = ({ completed }) => {
  return (
    <div className={completed === 100 ? 'splash-screen splash-screen-short' : 'splash-screen'}>
      <picture>
        <source media="(max-width: 837px)" srcSet={logoHorizontal} />
        <img src={logo} className="splash-logo" alt="logo" />
      </picture>

      {completed === 100 ? null : <ProgressBar completed={completed} />}
    </div>
  )
}

export default SplashScreen
