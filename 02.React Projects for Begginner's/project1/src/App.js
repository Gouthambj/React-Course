import {
  Counter,
  MealsApi,
  Pnf,
  Todo,
  ToggleBackgroundColor,
} from "./components";
import { Header, Footer } from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Your routes go here */}
        <Routes>
          {/* Add more routes here as needed*/}
          <Route exact path="/" element={<Counter />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/meals" element={<MealsApi />} />
          <Route exact path="/toggle" element={<ToggleBackgroundColor />} />
          <Route exact path="/*" element={<Pnf />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
