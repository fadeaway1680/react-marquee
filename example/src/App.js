import React from 'react'
import ReactMarquee from 'react-marquee'
import 'react-marquee/dist/index.css'

const marqueeData = [
  { id: '222****2222', content: '现金券10元' },
  { id: '111****1111', content: 'iPhone 12' },
  { id: '333****3333', content: '8积分' },
]

const App = () => {
  return <ReactMarquee className='example-marquee'>
    {marqueeData.map((item, i) => <span className='example-marquee__item' key={`${i}-${item.id}`}>恭喜{item.id}&nbsp;&nbsp;获得{item.content}</span>)}
  </ReactMarquee>
}

export default App
