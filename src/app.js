import "./App.css";
import Menu from './Menu';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Home = lazy(() => import('./pages/Home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const SolicitanteCon = lazy(() => import('./pages/Solicitante/SolicitanteCon'));
const RequisicaoCon = lazy(() => import('./pages/Requisicao/RequisicaoCon'));

function App() {
      return (
            <BrowserRouter >
                  <Menu />
                  <Suspense fallback={<div>Carregando ... </div>}>
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/colaborador" element={<ColaboradorCon />} />
                              <Route path="/solicitante" element={<SolicitanteCon />} />
                              <Route path="/requisicao" element={<RequisicaoCon />} />
                        </Routes>
                  </Suspense>
            </BrowserRouter >
      );

}

export default App;