import React from 'react'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";
import {Provider} from "react-redux";
import {store} from "../../redux/store.js";

export default function MainLayout() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}    