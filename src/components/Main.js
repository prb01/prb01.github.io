const Main = (props) => (
  <main
    className="
  relative
  pt-1
  w-screen

  xl:w-full
  xl:h-full
  
  xl:before:content-['']
  xl:before:absolute 
  xl:before:top-0 
  xl:before:left-0 
  xl:before:w-1 
  xl:before:h-full 
  xl:before:rounded-full 
  xl:before:bg-black

  xl:after:content-['']
  xl:after:absolute
  xl:after:bottom-0
  xl:after:left-0
  xl:after:h-1
  xl:after:w-full
  xl:after:rounded-full
  xl:after:bg-black"
  >
    {props.children}
  </main>
)

export default Main
