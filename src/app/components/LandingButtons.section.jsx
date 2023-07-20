import Button from './Button.component';

const LandingButtons = ({ isOnCrosswordPage, toggleIsOnCrosswordPage }) => {
  return (
    <section id="landing-buttons" className="landing-buttons">
      <Button text="Crossword" handleClick={toggleIsOnCrosswordPage} />
      <Button text="About" link="#about-section" />
      <Button text="Contribute" link="#contribute-section" />
    </section>
  );
};

export default LandingButtons;
