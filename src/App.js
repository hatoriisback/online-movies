import NavBar from "./Components/NavBar";
import NavRoutes from "./Components/NavRoutes";

function App() {
  return (
    <div className="app">
      <div className="NavBarApp">
        <NavBar />
      </div>
      <div className="NavBar-Routers">
        <NavRoutes />
      </div>
    </div>
  );
}

export default App;
