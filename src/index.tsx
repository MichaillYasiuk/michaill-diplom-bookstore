import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "ui/GlobalStyles";
import { persistor, store } from "store";
import { router } from "routes/router";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
