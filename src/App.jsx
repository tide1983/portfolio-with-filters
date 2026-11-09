import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';

import img200 from './img/200.jpg';
import imgTriangle from './img/Triangle_003.jpg';
import imgTriangle1 from './img/Triangle_350x197.jpg';
import imgTriangle2 from './img/Triangle_350x197_1.jpg';
import imgCody from './img/codystretch.jpg';
import imgDia from './img/dia.jpg';
import imgEmi from './img/emi_haze.jpg';
import imgMon from './img/mon.jpg';
import imgPlace1 from './img/place200x290.png';
import imgPlace2 from './img/place200x290_1.png';
import imgPlace3 from './img/place200x290_2.png';
import imgPlace4 from './img/place200x290_3.png';
import imgNinety from './img/the_ninetys_brand.jpg';
import imgTransmission from './img/transmission.jpg';

function App() {
    const projects = [
    // 1-й ряд
    { id: 1, category: 'Business Cards', img: imgDia },       // Очки
    { id: 2, category: 'Websites', img: img200 },             // 200
    { id: 3, category: 'Business Cards', img: imgMon },       // Девушка в черном
    
    // 2-й ряд
    { id: 4, category: 'Flayers', img: imgEmi },              // 200 (серый)
    { id: 5, category: 'Websites', img: imgNinety },          // Transmissions
    { id: 6, category: 'Flayers', img: imgTriangle2 },        // Коллаж с треугольниками
    
    // 3-й ряд
    { id: 7, category: 'Business Cards', img: imgCody },      // Девушка-статуя
    { id: 8, category: 'Websites', img: imgTriangle },        // Прыжок в горах (широкая)
    { id: 9, category: 'Business Cards', img: imgPlace2 },    // Девушка-статуя (снова)
    
    // 4-й ряд
    { id: 10, category: 'Flayers', img: imgPlace1 },          // Парень в свитере
    { id: 11, category: 'Websites', img: imgPlace3 },         // Transmissions (снова)
    { id: 12, category: 'Business Cards', img: imgTriangle1 },// Звезда (треугольник)
    
    // 5-й ряд
    { id: 13, category: 'Flayers', img: imgTransmission },    // TWO PICTURE SLIDE
    { id: 14, category: 'Websites', img: imgPlace4 },         // Черная карточка Picture Slide
  ];

  return (
    <div className="container">
      <Portfolio projects={projects} />
    </div>
  );
}

export default App;