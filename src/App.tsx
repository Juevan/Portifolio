import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Techs from './components/Techs'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <Header />
            <Home />
            <About />
            <Portfolio />
            <Techs />
            <Resume />
            <Contact />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default App