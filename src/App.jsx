import Home from './pages/Home'
import Places from './pages/Places'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <> 
     <Routes>
              <Route path = '/' element = {<Home/>} />
              <Route path = '/placetostay' element = {<Places/>} />
    </Routes>
    </>
  )
}

export default App
