import html1 from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import rjs from "../images/react1.png";
import mongo from "../images/mongo.png";
import express from "../images/express.png";
import node from "../images/node.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailw.jpeg";
import python from "../images/python.png";
import git from "../images/git.png";
import github from "../images/github1.png";
import rest from "../images/rest.svg";
import "../css/education.css";

const Education = () => {
  return (
    <div className="back">
      <h1 className="skill">Skills</h1>

      <div className="flex flex1 justify-around flex-wrap">
        {/* HTML */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg shado">
          <div className="navl">
            <img className="html" src={html1} alt="HTML" width={"100px"} />
          </div>
          <div className="px-1 py-2">
            <div className="font-bold text-xl mb-2">HTML</div>
            <p className="ptag">
              HTML (HyperText Markup Language) is the standard language for
              creating and designing web pages and web applications.
            </p>
          </div>
        </div>

        {/* CSS */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg css">
          <div className="navl">
            <img className="cssp" src={css} alt="CSS" width={"170px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">CSS</div>
            <p className="ptag">
              CSS (Cascading Style Sheets) is a language for styling web pages,
              controlling layout, colors, fonts, and more to enhance their
              appearance and usability.
            </p>
          </div>
        </div>

        {/* JavaScript */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg js">
          <div className="navl">
            <img className="jsp" src={js} alt="JavaScript" width={"180px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">JavaScript</div>
            <p className="ptag">
              JavaScript is a programming language for making websites
              interactive. It lets you change content, respond to clicks, and
              create dynamic effects.
            </p>
          </div>
        </div>

        {/* React */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg rj">
          <div className="navl">
            <img className="react" src={rjs} alt="React" width={"110px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">React</div>
            <p className="ptag">
              React is a JavaScript library for building user interfaces,
              focusing on reusable components and efficient rendering.
            </p>
          </div>
        </div>

        {/* Node.js */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg nj">
          <div className="navl">
            <img className="node" src={node} alt="Node.js" width={"150px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Node.js</div>
            <p className="ptag">
              Node.js is a server-side JavaScript runtime for scalable
              applications, leveraging Chrome's V8 engine.
            </p>
          </div>
        </div>

        {/* Express.js */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg ej">
          <div className="navl">
            <img className="express" src={express} alt="Express.js" width={"150px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Express.js</div>
            <p className="ptag">
              Express.js is a minimalist web framework for Node.js, simplifying
              server-side web application development.
            </p>
          </div>
        </div>

        {/* MongoDB */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg md">
          <div className="navl">
            <img className="mongo" src={mongo} alt="MongoDB" width={"90px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MongoDB</div>
            <p className="ptag">
              MongoDB is a NoSQL database using JSON-like documents for flexible,
              scalable data management.
            </p>
          </div>
        </div>

        {/* Python */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg py">
          <div className="navl">
            <img className="python" src={python} alt="Python" width={"180px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Python</div>
            <p className="ptag">
              Python is a versatile and readable high-level programming language.
            </p>
          </div>
        </div>

        {/* Bootstrap */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg bs">
          <div className="navl">
            <img className="boot" src={bootstrap} alt="Bootstrap" width={"130px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Bootstrap</div>
            <p className="ptag">
              Bootstrap is a framework for responsive web design with
              ready-to-use components and a flexible grid system.
            </p>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg tw">
          <div className="navl">
            <img className="tail" src={tailwind} alt="Tailwind CSS" width={"280px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tailwind CSS</div>
            <p className="ptag">
              Tailwind CSS is a utility-first CSS framework for fast and
              customizable UI development.
            </p>
          </div>
        </div>

        {/* Git */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg git">
          <div className="navl">
            <img className="gitp" src={git} alt="Git" width={"110px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Git</div>
            <p className="ptag">
              Git is a distributed version control system used for tracking
              changes in source code during software development.
            </p>
          </div>
        </div>

        {/* GitHub */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg github">
          <div className="navl">
            <img className="githubp" src={github} alt="GitHub" width={"180px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">GitHub</div>
            <p className="ptag">
              GitHub is a web platform for hosting Git repositories and
              facilitating collaborative software development.
            </p>
          </div>
        </div>

        {/* Rest APIs */}
        <div className="max-w-72 mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg rest">
          <div className="navl">
            <img className="restapi" src={rest} alt="Rest APIs" width={"200px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Rest APIs</div>
            <p className="ptag">
              REST APIs are web services for interacting with server resources
              via HTTP methods like GET, POST, PUT, DELETE.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
