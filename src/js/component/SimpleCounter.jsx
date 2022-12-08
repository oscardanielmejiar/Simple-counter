import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./counter.css";

const SimpleCounter = (props) =>{
  return (
    <div className="text-center">
      <div className="BigCounter">
        <div className="clock">
          <i class="far fa-clock"></i>
        </div>
        <div className="four">{props.digit4 % 10}</div>
        <div className="three">{props.digit3% 10}</div>
        <div className="two">{props.digit2% 10}</div>
        <div className="one">{props.digit1 % 10}</div>
      </div>
    </div>
  );
}

SimpleCounter.protoTypes = {
  digit1: PropTypes.number,
  digit2: PropTypes.number,
  digit3: PropTypes.number,
  digit4: PropTypes.number,
  click: PropTypes.func,
};


let counter = 0;
setInterval(function(){
  const cuatro = Math.floor(counter / 1000);
  const tres = Math.floor(counter / 100);
  const dos = Math.floor(counter / 10);
  const uno = Math.floor(counter / 1);
  counter++;

  ReactDOM.render(
    <SimpleCounter digit1={uno} digit2={dos} digit3={tres} digit4={cuatro}/>,
    document.querySelector("#app")
  );
}, 1000);


export { SimpleCounter }