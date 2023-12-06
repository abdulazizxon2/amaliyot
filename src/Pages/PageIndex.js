import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Glavniy from "./Glavniy"
import Oplata from "./Oplata"
import Dostavka from "./Dostavka"
import Vozvrat from "./Vozvrat"
import Otvizv from "./Otvizv"
import Vapros from "./Vapros"
import Novosti from "./Novosti"
import Kontakt from "./Kontakt"
import Kampaniya from "./Kampaniya"
import Footer from "../components/Footer/Footer"
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Katalog from "./KatalogPage";
import Like from "./Like";
import Korzinka from "./Korzinka";
import FullPage from "./FullPage";



export default function PageIndex() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route element={<Footer />}>
          <Route path="/" element={<Glavniy />}/>
          <Route path="/kampaniya" element={<Kampaniya />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/dostavka" element={<Dostavka />} />
          <Route path="/vozvrat" element={<Vozvrat />} />
          <Route path="/otvizv" element={<Otvizv />} />
          <Route path="/vapros" element={<Vapros />} />
          <Route path="/novosti" element={<Novosti />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/katalog" element={<Katalog/>}/>
          <Route path="/like" element={<Like/>}/>
          <Route path="/korzinka" element={<Korzinka/>}/>
          <Route path="/fullPage" element={<FullPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  )

}
