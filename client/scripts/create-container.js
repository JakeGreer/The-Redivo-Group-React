const path = require("path");
const fs = require("fs");
const title = process.argv[3];
const passedPath = process.argv[2];
const argPath = `${process.cwd()}\\${passedPath}`;

if (!title || !argPath) {
  return new Error("Please pass 2 arguments");
} else {
  const js = `import React, { Component } from "react";
import { connect } from "react-redux";

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
  const newPath = path.join(argPath, `${title}.jsx`);

  fs.writeFile(newPath, js, err => {
    console.log("Container Generated!");
  });
}
