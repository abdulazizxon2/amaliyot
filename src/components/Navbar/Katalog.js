import React from "react";
import { useSelector } from "react-redux";
function Katalog() {
  let state = useSelector((state) => state.NavbarRedux);
  let { katalogOpen } = state;
  return (
    <>
      <div className={katalogOpen ? "openKatalog" : "closeKatalog"} >
        <div className="katalog title">

          salom
        </div>
      </div>
    </>
  )
} export { Katalog }