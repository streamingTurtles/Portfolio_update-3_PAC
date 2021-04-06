
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";



function App() {

  return (
    <Router>
      <Header />
      <PageTitle>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </PageTitle>
      <Footer />
    </Router >
  )
}

export default App;

