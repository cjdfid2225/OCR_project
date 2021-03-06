/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ChatBot from "views/examples/ChatBot.js";
import Kibana from "views/examples/Kibana.js";
import RestTest from "views/examples/restTest.js";
import RestCall from "views/examples/restCall.js";

import Login from "views/dev/Login.js";
import InsertTest from "views/dev/insertTest.js";

import Signup from 'views/examples/Signup.js'
import Image_upload from 'views/examples/Image_upload.js'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/image_upload"
          render={(props) => <Image_upload {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route 
          path='/signup'
          render={(props) => <Signup {...props} />}
        />
        <Route path="/ChatBot" render={(props) => <ChatBot {...props} />} />
        <Route path="/Kibana" render={(props) => <Kibana {...props} />} />
        <Route path="/restTest" render={(props) => <RestTest {...props} />} />
        <Route path="/restCall" render={(props) => <RestCall {...props} />} />
        <Route path="/Login" render={(props) => <Login {...props} />} />

        <Route
          path="/InsertTest"
          render={(props) => <InsertTest {...props} />}
        />

        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
