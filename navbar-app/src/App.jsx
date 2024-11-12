import Navbar from "./Navbar"
import About from "./pages/About"
import Pricing from "./pages/Pricing"




function App() {
  let component
  switch (window.location.pathname){
case "/":
  component= <App />
  break
  case "/pricing":
    component=<Pricing />;
    break
    case "/about":
      component=<About />;
      break
  }
  return (
    <>
   <h1>TTabs Component with React</h1>
<Navbar />
{component}
    </>
  )
}
export default App
