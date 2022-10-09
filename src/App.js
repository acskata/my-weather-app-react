import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="weatherApp">
        <Search />
      </div>
      <Footer />
    </div>
    </div>
  );
}
