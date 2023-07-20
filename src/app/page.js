'use client';

import { useState } from 'react';

import LandingPage from './components/LandingPage.component';
import Crossword from './crossword/Crossword.component';
import AboutSection from './components/AboutSection.component';
import ContributeSection from './components/ContributeSection.component';

import './layout.styles.css';

export default function Home() {
  const [isOnCrosswordPage, setIsOnCrosswordPage] = useState(false);

  const toggleIsOnCrosswordPage = () => {
    setIsOnCrosswordPage(!isOnCrosswordPage);
  };

  return (
    <main>
      {!isOnCrosswordPage && (
        <LandingPage
          isOnCrosswordPage={isOnCrosswordPage}
          toggleIsOnCrosswordPage={toggleIsOnCrosswordPage}
        />
      )}
      {isOnCrosswordPage && <Crossword />}
      <AboutSection />
      <ContributeSection />
    </main>
  );
}
