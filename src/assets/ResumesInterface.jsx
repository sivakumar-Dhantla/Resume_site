import React from "react";
import bg from "./images/bgpic3.webp";

function Resumes() {
  const user = [
    {
      id: 1,
      image: "https://d.novoresume.com/images/doc/general-resume-template.png",
      title: "Resume1",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 2,
      image: "https://d.novoresume.com/images/doc/skill-based-cv-template.png",
      title: "Resume2",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 3,
      image:
        "https://marketplace.canva.com/EAFKBaPgE5g/1/0/1131w/canva-blue-light-blue-color-blocks-flight-attendant-cv-yPFB16IJZPY.jpg",
      title: "Resume3",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 4,
      image: "https://d.novoresume.com/images/doc/creative-resume-template.png",
      title: "Resume4",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNXnI7E0mjUOQgCjWZ8DbiN9ERUAuR2JEgBEb1A8CGR_plNmWqovjzNfL63bRjpNyyEE&usqp=CAU",
      title: "Resume5",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QE88PSD-KmoA3-HNRQaFTfeEN_378KawMS4AKKr9RNGElmlq8-Zw2vQRVl2qoDnjCnA&usqp=CAU",
      title: "Resume6",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 7,
      image: "https://d.novoresume.com/images/doc/general-resume-template.png",
      title: "Resume1",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 8,
      image: "https://d.novoresume.com/images/doc/skill-based-cv-template.png",
      title: "Resume2",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 9,
      image:
        "https://marketplace.canva.com/EAFKBaPgE5g/1/0/1131w/canva-blue-light-blue-color-blocks-flight-attendant-cv-yPFB16IJZPY.jpg",
      title: "Resume3",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 10,
      image: "https://d.novoresume.com/images/doc/creative-resume-template.png",
      title: "Resume4",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 11,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNXnI7E0mjUOQgCjWZ8DbiN9ERUAuR2JEgBEb1A8CGR_plNmWqovjzNfL63bRjpNyyEE&usqp=CAU",
      title: "Resume5",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
    {
      id: 12,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QE88PSD-KmoA3-HNRQaFTfeEN_378KawMS4AKKr9RNGElmlq8-Zw2vQRVl2qoDnjCnA&usqp=CAU",
      title: "Resume6",
      desription:
        "The challenge of life, I have found, is to build a resume that doesn't simply tell a story about what you want to be, but it's a story about who you want to be.",
    },
  ];
  let newArray = user.map((eachObj) => {
    return (
      <article className="list">
        <img src={eachObj.image} width="200px" height="260px" />
        <h3>{eachObj.title}</h3>
        <p>{eachObj.desription}</p>
      </article>
    );
  })
 
  return (
    <>
      <div className="first-part">
        <div className="left-part">
          <div>
            <select name="" id="" className="select-box">
              <option value="cv" className="options">
                CV
              </option>
            </select>
          </div>
          <div className="f-p-description">
            <h4>Pick Your Resume</h4>
            <p>
              The simpler you say it, the more eloquent it is,There's a great
              power in words, if you don't hitch too many of them together.
            </p>
          </div>
        </div>
        <div className="right-part">
          <img src={bg} width="500px" height="250px" />
        </div>
      </div>
      <div className="resume-list">{newArray}</div>
    </>
  );
}

export default Resumes;
