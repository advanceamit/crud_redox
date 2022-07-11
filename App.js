
import { Provider } from "react-redux";
// import { store } from './store/Store';

// import Nav from './component/Nav';
// import { BrowserRouter } from 'react-router-dom';
// !!!!
import { store } from '../src/crudApp/store/store';
import Home from "../src/crudApp/component/Home"

function App() {
  return (
    // <BrowserRouter>
    // <Provider store={store}>
    //      <Nav />
      

    //   </Provider>
    // </BrowserRouter>

    <>
     <Provider store={store}>
     <Home/>
     </Provider>
 
    </>

  );
}

export default App;
