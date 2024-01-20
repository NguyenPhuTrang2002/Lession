import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../src/routes'


// import Index1 from "./components/LessionTwo/Index";
// import Login from "./components/LessionThree/Login";
// import Index from "./components/LessionOne/Index";
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  )
}
export default App;