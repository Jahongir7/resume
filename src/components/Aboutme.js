import React, { useState } from "react";
import data from "../data";
import SingleQuestion from "./Question";
import "./AboutMe.css";
import PhotoMe from "../images/photo.jpg";

function AboutMe() {
  const [questions] = useState(data);
  return (
    <main>
      <div className="container">
        <div className="info1">
          <div className="AboutPhoto">
            <img src={PhotoMe} alt="" width="250" height="250" />
          </div>
          <section className="info">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
