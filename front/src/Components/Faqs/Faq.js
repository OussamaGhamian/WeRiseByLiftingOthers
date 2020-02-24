import React from "react";
import {Spring} from 'react-spring/renderprops'
function Faq({ faq, index, toggleFAQ }) {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -100 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ duration: 1000 }}
    >
      {
        props =>
          <div style={props}>
            <div
              className={"faq " + (faq.open ? "open" : "")}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
              </div>
              <div className=" faq-answer">
                {faq.answer}
              </div>
            </div>
          </div>
      }
    </Spring>
  );
}

export default Faq;
