import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { publicRoutes } from './routes';
import DefaultLayoutClient from './layouts/DefaultLayoutClient';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* client routes */}
          {publicRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <DefaultLayoutClient>
                    <route.component />
                  </DefaultLayoutClient>
                }
              />
            )
          })}

          {/* 404 page */}
          {/* <Route path='*' element={<Page404 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
