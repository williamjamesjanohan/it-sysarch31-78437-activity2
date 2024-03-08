
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Student from './Student'


function App() {
 
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Student/>
      </div>
      <Footer />
    </div>
  )
}

export default App
