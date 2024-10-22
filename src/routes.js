import App from "./App";
import Home from "./components/Home"
import CharacterForm from "./components/CharacterForm"
import Profile from "./components/Profile"
import ErrorPage from "./components/ErrorPage";



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
        path: "/profile/:id",
        element: <Profile />
      }
    ]
  }
];



export default routes;
