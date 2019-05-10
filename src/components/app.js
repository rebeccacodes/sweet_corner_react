import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../assets/css/app.scss';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import Home from '../components/home';
import Services from '../components/services';



const App = () => (
    <div className="app">
        <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Footer />


        </div>
    </div>
);

export default App;
