import "./css/style.css";

import Logo from "./assets/Logo.svg";
import Myself from "./assets/myself.png";
import Me from "./assets/me.jpeg";

import HtmlIcon from "./assets/html.png";
import CssIcon from "./assets/css-3.png";
import JsIcon from "./assets/Js.png";
import CIcon from "./assets/c.png";
import DavinciIcon from "./assets/davinci.png";
import PremiereIcon from "./assets/premiere-pro.png";
import BlenderIcon from "./assets/blender.png";

import WarkopImg from "./assets/Warkop Frenzy.jpg";
import JeembaImg from "./assets/Jeemba.webp";
import WebsiteImg from "./assets/website 1.png";
import PialaGubernurImg from "./assets/Piala Gubernur.png";

import InstagramIcon from "./assets/instagram.png";
import GithubIcon from "./assets/github.png";

function App() {
  return (
    <>
      <nav className="Navbar">
        <a href="#" className="nav-brand">
          <img src={Logo} alt="Logo" className="nav-logo" />
          <span className="nav-title">DAFA DHIYAUL HAQ</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Portfolio">Galery</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="Hero">
        <div className="hero-container">
          <span className="hero-subtitle">
            Developer &amp; Tech Enthusiast.
          </span>
          <h1 className="hero-title">
            Hallo, Saya <span className="highlight">Dafa Dhiyaul Haq</span>
          </h1>
          <span className="hero-subtitle">
            Halo! Saya <b>Dafa Dhiyaul Haq</b>, mahasiswa Pendidikan Ilmu
            Komputer di Universitas Pendidikan Indonesia yang sangat tertarik
            pada dunia teknologi.
          </span>
        </div>
        <img src={Myself} alt="Foto Profil" className="hero-icon" />
      </section>

      <section id="About">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="about-container">
          <div className="about-desc">
            <p>
              Halo, nama saya <b>Dafa Dhiyaul Haq</b> atau dikenal sebagai Gjen.
              Saya adalah seorang kreator yang memiliki minat besar sebagai tech
              enthusiast, developer, dan editor. Pertama kali saya mulai fokus
              dunia ini adalah saat masih duduk di bangku SMA, dan sejak saat
              itu saya terus mengasah kemampuan untuk mewujudkan passion saya
              dalam membangun Website, 3D Model, dan Vidio Editing.
            </p>

            <p>
              Selain itu, saya sangat menikmati mengabadikan berbagai momen
              berkesan dengan menyunting foto atau video, lalu mengunggahnya ke
              media sosial. Saya mendapati bahwa kreativitas yang sama saat saya
              membuat kode juga berperan besar dalam proses fotografi dan
              penyuntingan, sehingga memungkinkan saya menciptakan karya seni
              melalui visual dan video.
            </p>

            <p>
              Secara keseluruhan, saya selalu mencari cara untuk melampaui batas
              kemampuan diri secara pribadi maupun profesional. Saya percaya
              bahwa kreativitas, dedikasi, dan rasa ingin tahu yang tinggi
              terhadap hal-hal baru akan terus mendorong saya dalam berkarier
              dan berkarya di dunia kreatif.
            </p>
          </div>

          <img src={Me} alt="Foto Dafa Dhiyaul Haq" />
        </div>
      </section>

      <section id="Skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={HtmlIcon} alt="HTML" />
          </div>
          <div className="skill-card">
            <img src={CssIcon} alt="CSS" />
          </div>
          <div className="skill-card">
            <img src={JsIcon} alt="JavaScript" />
          </div>
          <div className="skill-card">
            <img src={CIcon} alt="C" />
          </div>
          <div className="skill-card">
            <img src={DavinciIcon} alt="DaVinci Resolve" />
          </div>
          <div className="skill-card">
            <img src={PremiereIcon} alt="Premiere Pro" />
          </div>
          <div className="skill-card">
            <img src={BlenderIcon} alt="Blender" />
          </div>
        </div>
      </section>

      <section id="Portfolio">
        <h2 className="section-title">Latest Works</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src={WarkopImg} alt="Warkop Frenzy" className="card-img" />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Game Project</span>
                <span className="card-year">2026</span>
              </div>
              <h3 className="card-title">Warkop Frenzy</h3>
              <p className="card-desc">
                Game simulasi tukang warkop yang diadaptasi dari tempat nyata.
              </p>
              <span className="card-link">Coming Soon</span>
            </div>
          </div>

          <div className="portfolio-card">
            <img src={JeembaImg} alt="Article Project" className="card-img" />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Article</span>
                <span className="card-year">2025</span>
              </div>
              <h3 className="card-title">
                Developing a Digital Tourism Guidebook Model for Community-Based
                Sustainable Tourism
              </h3>
              <p className="card-desc">
                Artikel yang membahas tentang digitalisasi panduan wisata di
                Thailand.
              </p>
              <a
                href="https://journal.diginus.id/JEEMBA/article/view/1552"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="portfolio-card">
            <img src={WebsiteImg} alt="Project Website" className="card-img" />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Website Project</span>
                <span className="card-year">2025</span>
              </div>
              <h3 className="card-title">Digital Tourism Guidebook</h3>
              <p className="card-desc">Website panduan wisata di Thailand.</p>
              <a
                href="https://digitaltourismguidebook.my.id/"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="portfolio-card">
            <img
              src={PialaGubernurImg}
              alt="Article Project"
              className="card-img"
            />
            <div className="card-body">
              <div className="card-header">
                <span className="card-tag">Vidio</span>
                <span className="card-year">2022</span>
              </div>
              <h3 className="card-title">
                Piala Gubernur Pelajar Juara 2022 - Creative Content Creator
              </h3>
              <p className="card-desc">
                Mengeksplor keindahan wisata Cisoka ECO Green Park, yang
                berlokasi di Kabupaten Sumedang
              </p>
              <a
                href="https://www.youtube.com/watch?v=Oo1YZ6wfO5Q"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="Footer">
        <div className="footer-container">
          <div className="contact">
            <a href="tel:+6285161936564">Nomor Telepon: +62 851-6193-6564</a>
            <a href="mailto:dafadhiyaulhaq2210@student.upi.edu">
              Email: dafadhiyaulhaq2210@student.upi.edu
            </a>
          </div>
          <div className="social">
            <a
              className="container"
              href="https://www.instagram.com/__thefreeman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" />
              <span>@__thefreeman</span>
            </a>
            <a
              className="container"
              href="https://github.com/Gjenius20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="GitHub" />
              <span>Gjenius20</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
