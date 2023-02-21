import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';  
import { Navbar } from '../components/navbar';
import { ContextWrapper } from '../context/context';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ContextWrapper>
        <Navbar />
        <Component {...pageProps} /> 
      </ContextWrapper>
    </Provider>)
}

export default MyApp;
