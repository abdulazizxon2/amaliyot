import React from "react";
import "./Style/Style.css"
import "./Style/Media.css"
import PageIndex from "./Pages/PageIndex";
import Config from "./Config/Config";
// import ModalOyna from "./components/Navbar/ModalOyna";
function App() {
  return (
    <>
    <Config />
      <div className="kontener">
        <PageIndex />
      </div>
    </>
  );
}
export default App;
