import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "../components/Footers/Footer.js";
import Header from "../components/Headers/Header.js";
import Welcome from "../views/Welcome.js"
import ArticleList from "../views/ArticleList.js"
import ArticleView from "../views/ArticleView.js"
import ArticleRegister from "../views/ArticleRegister.js"


const Basic = (props) => {

  return (
    <>
      <Header/> 
        <div>
            <Switch>                
                <Route exact path="/" component= {Welcome} />        
                <Route path="/view" component= {ArticleView} />        
                <Route path="/list" component= {ArticleList} />                        
                <Route path="/regist" component= {ArticleRegister} />        
            </Switch>             
        </div>        
      <Footer/>        
    </>
  );
};

export default Basic;
