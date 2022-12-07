import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./counter.css"

const SimpleCounter = (props) => {
  return (
    <div className="BigCounter">
      <div className="clock">
      <i class="far fa-clock"></i>
      </div>
      <div className="four">{props.digit4}</div>
      <div className="three">{props.digit3}</div>
      <div className="two">{props.digit2}</div>
      <div className="one">{props.digit1}</div>

    </div>
  );
}

SimpleCounter.protoTypes = {
  digit1: PropTypes.number,
  digit2: PropTypes.number,
  digit3: PropTypes.number,
  digit4: PropTypes.number,
}

let counter = 0;
setInterval(function(){
  const cuatro = Math.floor(counter/10000)
  const tres = Math.floor(counter/1000)
  const dos = Math.floor(counter/100)
  const uno = Math.floor(counter/10)
  ReactDOM.render(<SimpleCounter 

  />,document.querySelector('#app2'))
},1000);



