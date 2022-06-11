import { useState, useRef, useEffect } from "react"

const Projects = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"]
  const delay = 2500

  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

//   .slideshow {
//   margin: 0 auto;
//   overflow: hidden;
//   max-width: 500px;
// }

// .slideshowSlider {
//   white-space: nowrap;
//   transition: ease 1000ms;
// }

// .slide {
//   display: inline-block;

//   height: 400px;
//   width: 100%;
//   border-radius: 40px;
// }

// /* Buttons */

// .slideshowDots {
//   text-align: center;
// }

// .slideshowDot {
//   display: inline-block;
//   height: 20px;
//   width: 20px;
//   border-radius: 50%;

//   cursor: pointer;
//   margin: 15px 7px 0px;

//   background-color: #c4c4c4;
// }

// .slideshowDot.active {
//   background-color: #6a0dad;
// }

  return (
    <div className="flex justify-center align-middle w-full h-full p-10">
      <div className="overflow-hidden w-full h-min">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx)
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
