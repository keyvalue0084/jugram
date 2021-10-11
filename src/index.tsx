import ReactDOM from 'react-dom';

import Basic from "./layout/Basic.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route  path="/" render={(props) => <Basic {...props} />} />        
        <Redirect from="/" to="/index" />
      </Switch>
    </BrowserRouter>,      
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
