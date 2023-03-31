import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./routes/router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "ui/GlobalStyles";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <PersistGate loading={null} persistor={persistor}>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </PersistGate>,
);
