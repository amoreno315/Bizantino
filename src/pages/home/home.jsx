import React from 'react';
import './homeStyle.css'

import HoverCard from '../../components/hoverCard/hoverCard'

// Colors for squared on background
const colors = [
  '#337AB7',
  '#0000ff',
  '#301934',
  '#002910'
]

// Created square and animate 
function createSquare() {
  
  const section = document.querySelector('section')
  const square = document.createElement('span')

  var size = Math.random() * 50

  square.style.width = 20 + size + 'px'
  square.style.height = 20 + size + 'px'

  square.style.top = Math.random() * window.innerHeight + 'px'
  square.style.left = Math.random() * window.innerWidth + 'px'

  const bg = colors[Math.floor(Math.random() * colors.length)]
  square.style.background = bg

  section.appendChild(square)

  setTimeout(() => {
    square.remove()
  },5000)

}
setInterval(createSquare, 150)

// Visible HomePage.
const HomePage = () => {
  return (<>
    <div>
      <div className="container">
        <HoverCard/>
    </div>
        <section></section>
        <script>
            {createSquare}
        </script>
    </div>
  </>);
}

export default HomePage;
