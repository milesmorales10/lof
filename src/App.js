import React from 'react';
import './App.css';

function App() {

  React.useEffect(() => {
    const noBtn = document.querySelector('#noBtn');

    if(noBtn){
      noBtn.addEventListener('mouseover', (e) => {
        const randomX = parseInt(Math.random()*100);
        const randomY = parseInt(Math.random()*100);
        noBtn.style.left = randomX + "%";
        noBtn.style.top = randomY + "%";
    });
  }
  })


  
  return (
    <>
      <div className="contenedor">
      <p contenteditable>¿Quieres ser mi Novia?</p>
      <button id="yesBtn" className='btn btn-dark' onClick={ () => { alert('Sabia que ibas a decir que si uwu') } }>Si</button>
      <button
        id="noBtn"
        className='btn btn-dark'
       >No</button>
      </div>

    </>
    

  );
}

export default App;
