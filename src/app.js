/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  //document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  //});
  console.log("Hello Matías from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "the"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "cat"];
  let action = ["took my", "threw my", "destroy my", "stole my"];
  let possetion = ["homework", "toe", "food", "pencil"];
  let where = ["on the street", "in my house", "at my backyard"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
