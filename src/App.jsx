import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Landing, Error, Dashboard, Register } from './pages'
// import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Error from './pages/Error'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SharedLayout from './pages/dashboard/SharedLayout'
import Stats from './pages/dashboard/Stats'
import Profile from './pages/dashboard/Profile'
import AddJob from './pages/dashboard/AddJob'
import AllJobs from './pages/dashboard/AllJobs'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='profile' element={<Profile />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='all-jobs' element={<AllJobs />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer autoClose={2000} position='bottom-left' />
    </BrowserRouter>
  )
}

export default App
