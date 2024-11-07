import App from "./App";
import Home from "./components/Home"
import CharacterForm from "./components/CharacterForm"
import Profile from "./components/Profile"
import ErrorPage from "./components/ErrorPage";


//Define routes in ascending parent order
//define key value pairs 
//define children components

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/form",
        element: <CharacterForm />
      },
      {
        //Dynamic Routes and URL Parameters come in — we can actually use URL routes to pass data!
        //This notation creates a URL parameter — a segment of our URL that can change and that contains data we can use in our components
        //By including a URL parameter (or multiple parameters) in a route, we make that route dynamic — this single route can actually have many different URLs! For example, the /profile/1, /profile/2, and /profile/3
        path: "/profile/:id",
        element: <Profile />
      }
    ]
  }
];



export default routes;
