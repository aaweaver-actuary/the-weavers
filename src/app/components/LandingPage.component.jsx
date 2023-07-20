import Grass from './Grass.component';
import LandingButtons from './LandingButtons.section';
import LandingHeader from './LandingHeader.component';

const LandingPage = ({ isOnCrosswordPage, toggleIsOnCrosswordPage }) => {
  return (
    <section id="landing-page" className="landing-page">
      <LandingHeader />
      <LandingButtons
        isOnCrosswordPage={isOnCrosswordPage}
        toggleIsOnCrosswordPage={toggleIsOnCrosswordPage}
      />
      <Grass />
    </section>
  );
};

export default LandingPage;
