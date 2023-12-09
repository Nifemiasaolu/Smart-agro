import {Navbar} from "./Features"
import {
  AboutUs,
  ContactUs,
  Display,
  Header,
  News,
  Products,
  Projects,
  Services,
  Testimonial,
} from "./Pages"

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Products/>
      <Display/>
      <Projects/>
      <Testimonial />
      <Services/>
      <News/>
      <ContactUs/>

    </div>
  )
}

export default App
///