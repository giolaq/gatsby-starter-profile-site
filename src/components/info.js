import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaMedium as Medium,
  FaStackOverflow as StackOverflow,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-4" style={{ color: "#3DDC84" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Giovanni Laquidara.
      </div>
      <div className="h1 code mt-4 mb-3">launch {"{"}</div>
      <div className="mx-5 my-4 h3 text-justify info">
        A Software Engineer passionate about Android and VR/AR.
        <br /> Daje!
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/joaolaq">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/joaobiriba">
          <Github />
          </a>
        <a className="mr-5 icon" href="mailto:glaquidara@gmail.com">
          <Mail />
        </a>
        <a className="mr-5 icon" href="https://medium.com/@joaolaq">
          <Medium />
        </a>
        <a className="mr-5 icon" href="https://stackoverflow.com/users/1759687/joaobiriba">
          <StackOverflow />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/glaquidara/">
          <Linkedin />
        </a>
      </div>
    </div>
  )
}
