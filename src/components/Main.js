import { useEffect } from "react"

const Main = (props) => {
  useEffect(() => {
    if (props.location !== props.displayLocation)
      props.setTransistionStage("fadeOut")
  }, [props.location])

  return (
    <main
      className={`
      ${props.transitionStage}
      relative
      pt-1
      w-screen
      h-90vh 

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
        if (props.transitionStage === "fadeOut") {
          props.setTransistionStage("fadeIn")
          props.setDisplayLocation(props.location)
        }
      }}
    >
      {props.children}
    </main>
  )
}

export default Main
