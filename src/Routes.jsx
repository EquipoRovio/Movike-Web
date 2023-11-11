import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BusquedaTwo = React.lazy(() => import("pages/BusquedaTwo"));
const BusquedaOne = React.lazy(() => import("pages/BusquedaOne"));
const BusquedaThree = React.lazy(() => import("pages/BusquedaThree"));
const DescripciondePelicula = React.lazy(() =>
  import("pages/DescripciondePelicula"),
);
const HomeTwelve = React.lazy(() => import("pages/HomeTwelve"));
const HomeEleven = React.lazy(() => import("pages/HomeEleven"));
const HomeTen = React.lazy(() => import("pages/HomeTen"));
const HomeEight = React.lazy(() => import("pages/HomeEight"));
const HomeSeven = React.lazy(() => import("pages/HomeSeven"));
const HomeNine = React.lazy(() => import("pages/HomeNine"));
const Generos = React.lazy(() => import("pages/Generos"));
const HomeSix = React.lazy(() => import("pages/HomeSix"));
const HomeFive = React.lazy(() => import("pages/HomeFive"));
const HomeFour = React.lazy(() => import("pages/HomeFour"));
const HomeThree = React.lazy(() => import("pages/HomeThree"));
const Busqueda = React.lazy(() => import("pages/Busqueda"));
const Formulario = React.lazy(() => import("pages/Formulario"));
const HomeTwo = React.lazy(() => import("pages/HomeTwo"));
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const RegistroOne = React.lazy(() => import("pages/RegistroOne"));
const Registro = React.lazy(() => import("pages/Registro"));
const RegistroTwo = React.lazy(() => import("pages/RegistroTwo"));
const Login = React.lazy(() => import("pages/Login"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const LoginTwo = React.lazy(() => import("pages/LoginTwo"));
const Inicio = React.lazy(() => import("pages/Inicio"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/logintwo" element={<LoginTwo />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrotwo" element={<RegistroTwo />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/registroone" element={<RegistroOne />} />
          <Route path="/homeone" element={<HomeOne />} />
          <Route path="/hometwo" element={<HomeTwo />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/homethree" element={<HomeThree />} />
          <Route path="/homefour" element={<HomeFour />} />
          <Route path="/homefive" element={<HomeFive />} />
          <Route path="/homesix" element={<HomeSix />} />
          <Route path="/generos" element={<Generos />} />
          <Route path="/homenine" element={<HomeNine />} />
          <Route path="/homeseven" element={<HomeSeven />} />
          <Route path="/homeeight" element={<HomeEight />} />
          <Route path="/hometen" element={<HomeTen />} />
          <Route path="/homeeleven" element={<HomeEleven />} />
          <Route path="/hometwelve" element={<HomeTwelve />} />
          <Route
            path="/descripciondepelicula"
            element={<DescripciondePelicula />}
          />
          <Route path="/busquedathree" element={<BusquedaThree />} />
          <Route path="/busquedaone" element={<BusquedaOne />} />
          <Route path="/busquedatwo" element={<BusquedaTwo />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
