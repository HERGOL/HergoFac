import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import {useLocation } from 'react-router-dom';



function Home() {
  const location = useLocation()

	useAckee(location.pathname, {
		server: 'https://hergoanalytics.netlify.app/',
		domainId: '249988e5-05e2-46ab-869d-7ec66e8859f7',
	}, {
		ignoreLocalhost: false,
	})
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default Home;
