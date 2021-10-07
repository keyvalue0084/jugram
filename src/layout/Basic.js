import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "../components/Footers/Footer.js";
import Header from "../components/Headers/Header.js";
import FeedList from "../views/FeedList.js"
import FeedView from "../views/FeedView.js"
import FeedRegister from "../views/FeedRegister.js"


const Basic = (props) => {

  return (
    <>
      <Header/> 
        <div>
            <Switch>                
                <Route path="/view" component= {FeedView} />        
                <Route path="/list" component= {FeedList} />                        
                <Route path="/regist" component= {FeedRegister} />        
            </Switch>             
        </div>        
      <Footer/>        
    </>
  );
};

export default Basic;
