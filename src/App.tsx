// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Design from './components/Design'
import Products from './components/Products'
import Philosophy from './components/Philosophy'
import ProductSelection from './components/ProductSelection'
import Social from './components/Social'
import Footer from './components/Footer'
// import "./app.css"

function App() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Services />
        <Design />
        <Philosophy />
        <Products />
        <ProductSelection />
        <Social />
        <Footer />
      </main>
    </div>
  )
}

export default App
