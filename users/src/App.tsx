import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import routes from './routes/navigate'
import LogIn from './view/LogIn';

function App() {

  const cookieEmail = Cookies.get('email');

  return (
    <BrowserRouter>
      <Routes>
        {routes.length > 0 && routes.map((route, index) => {
          return (<Route key={index} path={route.path} Component={!cookieEmail ? LogIn : route.Component}></Route>);
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
