import React, { useEffect, useRef, useState } from 'react'
import '../Slide/slide.css'
import Banner from '../../assets/banner.jpg'
import Banner1 from '../../assets/main2.jpg'
import Banner2 from '../../assets/main3.jpg'
import Banner3 from '../../assets/main4.jpg'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: Banner,
    subtitle: 'Your Movies in one place',
    title: 'Welcome to MovieAnywhere',
    link: '/movies',
  },
  {
    image: Banner1,
    subtitle: 'Stream Anytime',
    title: 'Unlimited Entertainment',
    link: '/stream',
  },
  {
    image: Banner2,
    subtitle: 'New Releases',
    title: 'Watch Latest Movies',
    link: '/latest',
  },
  {
    image: Banner3,
    subtitle: 'Top Rated Shows',
    title: 'Binge Worthy Series',
    link: '/shows',
  },
]

function Slide() {
  const sliderRef = useRef(null)
  const [current, setCurrent] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(current + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [current])

  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1
    if (index >= slides.length) index = 0

    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * index,
      behavior: 'smooth',
    })

    setCurrent(index)
  }

  return (
    <div className="slideDiv">
      <div className="Banners">
        <div className="slider" ref={sliderRef}>
          {slides.map((slide, index) => (
            <img
              key={index}
              className="BannerImg"
              src={slide.image}
              alt={slide.title}
            />
          ))}
        </div>
      </div>

      <div className="Titles">
        {/* TEXT CHANGES WITH SLIDE */}
        <div className="part1">
          <h5>{slides[current].subtitle}</h5>
          <h1>{slides[current].title}</h1>
          <Link to={slides[current].link} className="learnMore">
            Learn More..
          </Link>
        </div>

      
        <div className="part2">
          <button className="arrow" onClick={() => goToSlide(current - 1)}>
            &lt;
          </button>

          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${current === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <button className="arrow" onClick={() => goToSlide(current + 1)}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slide
