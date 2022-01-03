import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home'
import BreweryDetail from './components/BreweryDetail'
import './App.css';
import './detailpage.css';
import './backanimated.css';
import BackGround from './components/BackGround';

function App() {

  const [breweries, setBreweries] = useState(null);
  const [fetchingData, setFetchingData] = useState(true)

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(
                  "https://api.openbrewerydb.org/breweries"
              );

              if (fetchingData) {
                  const data = await response.json();
                  setBreweries(data);
              }
              setFetchingData(false);
          } catch (e) {
              console.error(e.message);
          }
      };

      fetchData();
  }, []);

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={
                          <Home
                              breweries={breweries}
                          />
                      }
                  ></Route>
                  <Route
                      exact
                      path="/details/:brew_id"
                      element={<BreweryDetail data={breweries} />}
                  />
              </Routes>
              <BackGround />
          </BrowserRouter>
      </div>
  );
}

export default App;
