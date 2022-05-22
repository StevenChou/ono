// import node module libraries
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// import layouts
import ScrollToTop from 'layouts/dashboard/ScrollToTop'
import AllRoutes from 'layouts/AllRoutes'

function App() {
  return (
    <Router>
      <div className='App'>
        <ScrollToTop />
        <AllRoutes />
        <ToastContainer position='top-center' />
      </div>
    </Router>
  )
}

export default App
