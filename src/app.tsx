import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { CreateTripPage } from "./pages/create-trip";
import { TripDetailspage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage/>,
  },
  {
    path: "/trips",
    element: <TripDetailspage/>,
  },
]);

export function App() {
  
  return <RouterProvider router={router} />
}

