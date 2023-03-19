import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bunite from "../components/class12/bunite";
import Cunite from "../components/class12/cunite";
import Dunite from "../components/class12/dunite";
import Aunite from "../components/class12/aunite";
import Aaunite from "../components/class11/aunite";
import Bbunite from "../components/class11/bunite";
import Ccunite from "../components/class11/cunite";
import Ddunite from "../components/class11/dunite";
import Funite from "../components/class11/funite";
import Eunite from "../components/class11/eunite";
import Toplu from "./topbar-temp";
import Periodic from "../components/periyodic-table/periodic-table";
import Kaynakca from "../components/kaynakca/kaynakca";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <Toplu>
              <Aaunite />
            </Toplu>
          }
        />

        <Route path="/">
          {/* 12. sınıf */}
          <Route
            path="12-1"
            element={
              <Toplu fixus={"top"}>
                <Aunite />
              </Toplu>
            }
          />
          <Route
            path="12-2"
            element={
              <Toplu>
                <Bunite />
              </Toplu>
            }
          />
          <Route
            path="kaynakca"
            element={
              <Toplu>
                <Kaynakca />
              </Toplu>
            }
          />
          <Route
            path="12-3"
            element={
              <Toplu>
                <Cunite />
              </Toplu>
            }
          />
          <Route
            path="12-4"
            element={
              <Toplu>
                <Dunite />
              </Toplu>
            }
          />

          {/* 11. sınıf */}

          <Route
            path="11-1"
            element={
              <Toplu>
                <Aaunite />
              </Toplu>
            }
          />
          <Route
            path="11-2"
            element={
              <Toplu>
                <Bbunite />
              </Toplu>
            }
          />
          <Route
            path="11-3"
            element={
              <Toplu>
                <Ccunite />
              </Toplu>
            }
          />
          <Route
            path="11-4"
            element={
              <Toplu>
                <Ddunite />
              </Toplu>
            }
          />
          <Route
            path="11-5"
            element={
              <Toplu>
                <Eunite />
              </Toplu>
            }
          />
          <Route
            path="11-6"
            element={
              <Toplu>
                <Funite />
              </Toplu>
            }
          />

          {/* periyodik tablo */}
          <Route
            path="periodik-tablo"
            element={
              <Toplu fixus={"sticky"}>
                <Periodic />
              </Toplu>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
