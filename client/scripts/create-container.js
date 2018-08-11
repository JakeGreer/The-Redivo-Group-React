const path = require("path");
const fs = require("fs");
const title = process.argv[3];
const passedPath = process.argv[2];
const argPath = `${process.cwd()}\\${passedPath}`;

if (!title || !argPath) {
  return new Error("Please pass 2 arguments");
} else {
  if (!fs.existsSync(argPath)) {
    fs.mkdirSync(argPath);
  }
  const componentJSX = `import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class ${title} extends Component {
    state = {};

    render() {
        return(
            <div>
            
            </div>
        )
    }
}

mapStateToProps(state) = () => {
    return;
}

export default connect(
    mapStateToProps,
    null
  )(${title});`;

  const componentPath = path.join(argPath, `${title}.jsx`);
  fs.writeFile(componentPath, componentJSX, err => {
    if (err) console.error(err);
    else console.log("Container Generated!");
  });

  const indexJS = `export { default } from "./${title}";`;
  const indexPath = path.join(argPath, "index.js");
  fs.writeFile(indexPath, indexJS, err => {
    if (err) console.error(err);
    else console.log("index.js generated");
  });

  const stylePath = path.join(argPath, "style.css");
  fs.writeFile(stylePath, "", err => {
    if (err) console.error(err);
    else console.log("style.css generated");
  });
}
