import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = () => {
    return <div>
        <p className="f3">
          {
            "I, the all powerful Smart Brain will detect faces in your pictures. Give me a try!"
          }
        </p>
        <div className="center">
          <div className="form center pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center input" type="text" placeholder="Paste an image URL here..." />
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
              Detect
            </button>
          </div>
        </div>
      </div>;
}

export default ImageLinkForm;