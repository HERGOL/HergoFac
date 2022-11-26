import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//TAMDA
import architecture from "../assets/img/architecture.png";
import st from "../assets/img/st.png";
import geologie from "../assets/img/geologie.png";
import SciencesHumaines from "../assets/img/SciencesHumaines.png";
import Télécommunication from "../assets/img/Télécommunication.png";
import biologie from "../assets/img/biologie.png";

//TAMDA_FIN
//BASTOS_DEBUT
import math from "../assets/img/math.png";
import info from "../assets/img/info.png";
import electro from "../assets/img/electronique.png";
import chimie from "../assets/img/chimie.png";
import sm from "../assets/img/sm.png";
import ge from "../assets/img/ge.png";
import gc from "../assets/img/gc.png";
//BASTOS_FIN
//HESNAOUA_DEBUT
import Anglais from "../assets/img/Anglais.png";
import Français from "../assets/img/Français.png";
import Amazighes from "../assets/img/Amazighes.png";
import Traduction from "../assets/img/Traduction.png";
import Arabes from "../assets/img/Arabes.png";
import Gestion from "../assets/img/Gestion.png";
import Commerciales from "../assets/img/Commerciales.png";
import Comptabilité from "../assets/img/Comptabilité.png";
import Economiques from "../assets/img/Economiques.png";
//HESNAOUA_FIN
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Link} from "react-router-dom";



export const Projects = () => {


  const Tamda = [
    {
      title: "Architecture",
      description: "Design & Development",
      imgUrl: architecture,
      url: "/Dps/DpArch" ,
    },
    {
      title: "Biologie",
      description: "Design & Development",
      imgUrl: biologie,
      url: "/Dps/DpBio",
    },
    {
      title: "Sciences et Technologie",
      description: "Faculté des Sciences",
      imgUrl: st,
      url: "/Dps/DpSt" ,
    },
    {
      title: "Geologie",
      description: "Design & Development",
      imgUrl: geologie,
      url: "/Dps/DpGeo",
    },
    {
      title: "Sciences Humaines",
      description: "Design & Development",
      imgUrl: SciencesHumaines,
      url: "/Dps/DpSh" ,
    },
    {
      title: "Télécommunication",
      description: "Design & Development",
      imgUrl: Télécommunication,
      url: "/Dps/Dpt" , 
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: geologie,
      url: "/Dps/DpSH" ,
    },
  ];
  const bastos = [
    {
      title: "Mathématiques",
      description: "Faculté des Sciences",
      imgUrl: math,
      url: "DpMath" ,
    },
    {
      title: "Génie Electique",
      description: "Design & Development",
      imgUrl: ge,
      url: "/Dps/DpGe" ,
    },
    {
      title: "électronique",
      description: "Design & Development",
      imgUrl: electro,
      url: "/Dps/DpElectro" ,
    },
    {
      title: "Informatique",
      description: "Design & Development",
      imgUrl: info,
      url: "/Dps/DpInfo" ,
    },
    {
      title: "Sience matiere",
      description: "Faculté des Sciences",
      imgUrl: sm,
      url: "/Dps/DpSm" ,
    },
    {
      title: "Chimie",
      description: "Faculté des Sciences",
      imgUrl: chimie,
      url: "/Dps/DpChimie" ,
    },
    {
      title: "Génie Civil",
      description: "Faculté des Sciences",
      imgUrl: gc,
      url: "/Dps/DpGc" ,
    },
  ];
  
  const Hesnaoua = [
    {
      title: "Anglais",
      description: "Design & Development",
      imgUrl: Anglais,
    },
    {
      title: "Français",
      description: "Design & Development",
      imgUrl: Français,
    },
    {
      title: "Langue et Culture Amazighes",
      description: "Design & Development",
      imgUrl: Amazighes,
    },
    {
      title: "Traduction",
      description: "Design & Development",
      imgUrl: Traduction,
    },
    {
      title: "Langue et Littératures Arabes",
      description: "Design & Development",
      imgUrl: Arabes,
    },
    {
      title: "Sciences de Gestion",
      description: "Design & Development",
      imgUrl: Gestion,
    },
    {
      title: "Sciences Commerciales",
      description: "Design & Development",
      imgUrl: Commerciales,
    },
    {
      title: "Sciences Financières et Comptabilité",
      description: "Design & Development",
      imgUrl: Comptabilité,
    },
    {
      title: "Sciences Economiques",
      description: "Design & Development",
      imgUrl: Economiques,
    },
  ];

  return (
    <section className="project" id="Départements">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Départements</h2>
                <p>Ici, vous allez trouver tous les doucement que vous aurait besoin pour réviser.Les départements sont triés par apport au campus où vous étudiez.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Campus Tamda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Campus Bastos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Campus Hasnaoua</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Tamda.map((project, index) => {
                            return (
                              <Link to={`${project.url}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> 
                              <ProjectCard key={index}{...project}/>
                              </Link>
                              
                              
                          )})
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          bastos.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Hesnaoua.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                 />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
