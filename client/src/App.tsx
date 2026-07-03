import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <main className="pt-[68px]">
          <Outlet />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
