'use client';

import { useState } from 'react';

import CrosswordBox from './CrosswordBox.component';
import UnusedBox from './UnusedBox.component';

import crosswordData from './Crossword.data';
import crosswordStructure from './crosswordStructure';

const Crossword = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [isDirectionAcross, setIsDirectionAcross] = useState(true);

  const handleBoxClick = (e, index) => {
    setActiveBox(index);
  };

  const toggleBoxDirection = () => {
    setIsDirectionAcross(!isDirectionAcross);
  };

  return (
    <section id="crossword" className="flex flex-col z-[1000] p-10">
      {crosswordStructure.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex flex-row">
            {row.map((box, boxIndex) => {
              if (box === 0) {
                return <UnusedBox key={`${rowIndex}-${boxIndex}`} />;
              } else {
                return (
                  <CrosswordBox
                    key={`${rowIndex}-${boxIndex}`}
                    box={box}
                    index={boxIndex}
                    isActive={activeBox === boxIndex}
                    handleBoxClick={handleBoxClick}
                    toggleBoxDirection={toggleBoxDirection}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Crossword;
