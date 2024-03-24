import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <span className="contactTitle">Contact Us</span>
      <div className="contactForm">
        <a
          href="https://www.facebook.com/people/%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84%D9%8A%D8%A9-20-%D8%BA%D8%B4%D8%AA-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A5%D9%82%D9%84%D9%8A%D9%85%D9%8A%D8%A9-%D8%B7%D8%A7%D9%86%D8%B7%D8%A7%D9%86/100087363576820/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="sidebarIcon fab fa-facebook-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
