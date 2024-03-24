import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <span className="aboutTitle">About Us</span>
      <div className="aboutInfo">
        <p className="aboutDes">
          Le lycée 20 Août de Tantan est une institution éducative renommée
          située dans la ville de Tantan, au Maroc. Fondé avec pour mission
          d'offrir une éducation de qualité et de promouvoir l'excellence
          académique, le lycée 20 Août est réputé pour son engagement envers le
          développement intellectuel et personnel de ses élèves. Sous la
          direction de M. Lgerch, le lycée s'efforce de fournir un environnement
          d'apprentissage stimulant et enrichissant, favorisant l'épanouissement
          de chaque élève. Grâce à des programmes éducatifs innovants et à une
          équipe pédagogique dévouée, le lycée 20 Août est un lieu où les élèves
          peuvent réaliser leur potentiel et se préparer à un avenir prometteur.
        </p>
      </div>
    </div>
  );
};

export default About;
