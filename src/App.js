import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NewPerson from "./pages/NewPerson/NewPerson";
import FavoritePerson from "./pages/FavoritePerson/FavoritePerson";


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/react-personal-app" element={<Home />} />
          <Route path="/new-person" element={<NewPerson />} />
          <Route path="/favorite-person" element={<FavoritePerson />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
