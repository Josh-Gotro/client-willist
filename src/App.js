import React, { useState } from 'react'
import './App.css';
import Title from './Title.js'
import LetterBank from './LetterBank.js'


function App() {
  const [letters, setLetters] = useState([]);


  document.addEventListener('keydown', (e) => {
    console.log(e.key, letters)
    setLetters(p => [...p, e])
  });

  // document.addEventListener(
  //   "keydown", 
  //   guessLetter
  // ) 

  // function guessLetter(e) {
  //   console.log(e.key)
  //   setLetters(p => [...p, e])
  // }

  return (
    <>
      <Title />
      <LetterBank />
    </>
  );
}

export default App;
