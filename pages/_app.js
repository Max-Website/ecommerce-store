import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Navbar } from "../components/navbar";
import { AppContext, useProvideStoreState } from "../context/context";

function MyApp({ Component, pageProps }) {

  const storeState = useProvideStoreState();
  return (
    <Provider store={store}>
      <AppContext.Provider value={storeState}>
        <Navbar />
        <Component {...pageProps} />
      </AppContext.Provider>
    </Provider>
  );
}

export default MyApp;
