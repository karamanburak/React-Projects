import "./App.css";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (

    //^ 2. way
      // <AppRouter/>
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
