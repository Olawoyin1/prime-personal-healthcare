import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";
import Loader from "./utils/Loader";
import { Toaster } from 'sonner';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const ErrorPage = lazy(() => import("./utils/ErrorPage"));
const SharedLayout = lazy(() => import("./layouts/SharedLayout"));
const VirtualCare = lazy(() => import("./pages/Virtual"));
const MedicalEquipment = lazy(() => import("./pages/MedicalEquipment"));

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader />}>
          <SharedLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />

      
      
      
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />


      <Route
        path="/medical-equipment"
        element={
          <Suspense fallback={<Loader />}>
            <MedicalEquipment />
          </Suspense>
        }
      />
      
      {/* <Route
        path="talk-to-an-expert"
        element={
          <Suspense fallback={<Loader />}>
            <TalkToExpertSection />
          </Suspense>
        }
      /> */}


      <Route
        path="services"
        element={
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        }
      />

      <Route
        path="contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />
        
      <Route
        path="virtual-care"
        element={
          <Suspense fallback={<Loader />}>
            <VirtualCare />
          </Suspense>
        }
      />


     
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <ErrorPage />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <>
    <Toaster richColors position="top-center" />
    <RouterProvider router={main} />;
    </>
  )
}

export default App;
