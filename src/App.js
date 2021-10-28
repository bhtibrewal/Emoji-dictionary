import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [output, setOutput] = useState("");

  function inputChangeHandler(event) {
    setOutput(event.target.value);
    // console.log(event.target.value);
  }
  const emoji = require("emoji-dictionary");

  console.log(emoji.getName("😍"));

  return (
    <div className="App">
      <Editor
        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        init={{
          plugins: "emoticons",
          toolbar: "emoticons",
          toolbar_location: "bottom",
          menubar: false,
          statusbar: false,
          height: 450
        }}
        initialValue=""
      />
      <h1>Hello CodeSandbox</h1>
      <input onChange={inputChangeHandler}></input>
      welcome {output}
    </div>
  );
}
