import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from '@/components/commons/Header.jsx'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Footer from '@/components/commons/Footer.jsx'

import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Router basename='/landing/'>
      <Header />
      <ToastContainer autoClose={false} />
      <main className='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
