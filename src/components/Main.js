import { useEffect } from "react"

const Main = ({
  location,
  displayLocation,
  setDisplayLocation,
  transitionStage,
  setTransistionStage,
  children
}) => {
  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage("fadeOut")
    }
  },)

  return (
    <main
      className={`
      ${transitionStage}
      relative
      pt-1
      h-screenWithNav
      flex
      justify-center
      items-center
      origin-bottom-left
      overflow-y-scroll
      overflow-x-hidden

      xl:w-full
      xl:h-full
      
      xl:before:content-['']
      xl:before:absolute 
      xl:before:top-0 
      xl:before:left-0 
      xl:before:w-1
      xl:before:h-full 
      xl:before:rounded-full 
      xl:before:bg-main

      xl:after:content-['']
      xl:after:absolute
      xl:after:bottom-0
      xl:after:left-0
      xl:after:h-1
      xl:after:w-full
      xl:after:rounded-full
    xl:after:bg-main`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn")
          setDisplayLocation(location)
        }
      }}
    >
      {children}
    </main>
  )
}

export default Main
