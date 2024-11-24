import "./App.css";
import Header from "./Header";
import SimpleSlider from "./SimpleSlider";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="placeholder"> PlaceHolder</div>
        <SimpleSlider />
      </div>
    </>
  );
}

export default App;
