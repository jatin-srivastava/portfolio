
import html1 from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import rjs from "../images/react1.png";
import mongo from "../images/mongo.png";
import express from "../images/express.png";
import node from "../images/node.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import python from "../images/python.png";
import "../css/education.css";
import git from "../images/git.png"
import github from "../images/github1.png"
import rest from "../images/rest.svg"

const Education = () => {
  return (
    <>
    <div className="back">
      <h1 className="skill">Skills</h1>
      {/* <h1 className="text-4xl font-bold mb-10">FrontEnd : </h1> */}

      <div className="flex flex1 justify-around flex-wrap">
        {/* html  */}
        <div className="max-w-72  bg-red  mt-10 divh rounded-3xl overflow-hidden mxw shadow-lg shado">
          <div className="navl">
            <img
              className="rounded-lg center"
              src={html1}
              alt=""
              width={"100px"}
            />
          </div>
          <div className="px-1 py-2">
            <div className="font-bold text-xl mb-2">HTML</div>
            <p className="text-white-700 text-base ptag">
              HTML (HyperText Markup Language) is the standard language for
              creating and designing web pages and web applications.
            </p>
          </div>
        </div>
        {/* css */}
        <div className="max-w-72 mt-10 css divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
            <img className="center" src={css} alt="" width={"170px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">CSS</div>
            <p className="text-white-700 text-base ptag">
              CSS (Cascading Style Sheets) is a language for styling web pages,
              controlling layout, colors, fonts, and more to enhance their
              appearance and usability.
            </p>
          </div>
        </div>
        {/* JavaScript */}
        <div className="max-w-72 mt-10 js divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
            <img className="center" src={js} alt="" width={"180px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">JavaScript</div>
            <p className="text-white-700 text-base ptag">
              JavaScript is a programming language for making websites
              interactive. It lets you change content, respond to clicks, and
              create dynamic effects.
            </p>
          </div>
        </div>
        {/* react js */}
        <div className="max-w-72 mt-10 rj divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
            <img className="rounded-lg " src={rjs} alt="" width={"110px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">React Js</div>
            <p className="text-white-700 text-base ptag">
              React is a JavaScript library for building user interfaces,
              focusing on reusable components and efficient rendering.
            </p>
          </div>
        </div>

        {/* backend */}
      {/* </div>
      <h1 className="text-4xl font-bold mb-5 mt-5">Backend : </h1>
      <div className="flex flex1 justify-around flex-wrap"> */}
        {/* node js */}
        <div className="max-w-72 mt-10 nj divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
            <img className="rounded-lg" src={node} alt="" width={"150px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Node Js</div>
            <p className="text-white-700 text-base ptag">
            Node.js: Server-side JavaScript runtime for scalable applications, leveraging Chrome's V8 engine.            </p>
          </div>
        </div>
        {/* express js */}
        <div className="max-w-72 mt-10 ej divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
            <img className="rounded-lg" src={express} alt="" width={"150px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Express Js</div>
            <p className="text-white-700 text-base ptag">
            Express.js: Minimalist web framework for Node.js, simplifying server-side web application development.            </p>
          </div>
        </div>
        {/* MongoDB */}
        <div className="max-w-72 mt-10 md divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
            <img className="center" src={mongo} alt="" width={"90px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MongoDB</div>
            <p className="text-white-700 text-base ptag">
            MongoDB: NoSQL database using JSON-like documents for flexible, scalable data management.
            </p>
          </div>
        </div>

        {/* python */}
        <div className="max-w-72 mt-10 py divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
            <img className="center" src={python} alt="" width={"180px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Python</div>
            <p className="text-white-700 text-base ptag">
            Python: Versatile and readable high-level programming language.
            </p>
          </div>
        </div>
      {/* </div>
      <h1 className="text-4xl font-bold mb-10">Styling : </h1>
      <div className="flex flex-wrap"> */}
{/* bootstrap */}
      <div className="max-w-72 mt-10 bs divh  rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
          <img className="center" src={bootstrap} alt="" width={"130px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">BootStrap</div>
            <p className="text-white-700 text-base ptag">
            Bootstrap: Framework for responsive web design with ready-to-use components and a flexible grid system.
            </p>
          </div>
        </div>
{/* tailwind */}
        <div className="max-w-72 mt-10 tw divh rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
          <img className="center" src={tailwind} alt="" width={"280px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tailwind</div>
            <p className="text-white-700 text-base ptag">
            Tailwind CSS: Utility-first CSS framework for fast and customizable UI development.
            </p>
          </div>
        </div>
{/* git */}
        <div className="max-w-72 git mt-10 bs divh  rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
          <img className="center" src={git} alt="" width={"110px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Git</div>
            <p className="text-white-700 text-base ptag">
            Git is a distributed version control system used for tracking changes in source code during software development.
            </p>
          </div>
        </div>
{/* github */}
        <div className="max-w-72 github mt-10 bs divh  rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
          <img className="center" src={github} alt="" width={"180px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">GitHub</div>
            <p className="text-white-700 text-base ptag">
            GitHub: Web platform for hosting Git repositories and facilitating collaborative software development.
            </p>
          </div>
        </div>
        {/* rest apis */}
        <div className="max-w-72 rest mt-10 bs divh  rounded-3xl overflow-hidden mxw shadow-lg">
          <div className="navl">
          <img className="center" src={rest} alt="" width={"200px"} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Rest APIs</div>
            <p className="text-white-700 text-base ptag">
            REST APIs: Web services for interacting with server resources via HTTP methods like GET, POST, PUT, DELETE.
            </p>
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
};
export default Education;
