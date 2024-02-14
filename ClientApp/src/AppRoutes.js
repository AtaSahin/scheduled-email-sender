import { Counter } from "./components/Counter";
import FetchData  from "./components/FetchData";
import Home from "./components/Home";
import SendEmail from "./components/SendEmail";

const AppRoutes = [
  {
        index: true,
        path: '/home',
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },

    {
        path: '/send-email',
        element: <SendEmail />
    },
];

export default AppRoutes;
