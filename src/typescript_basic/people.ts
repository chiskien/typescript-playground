import { Person } from "./interface";

export let people: Person[] = [];
const chiskien: Person = {
  name: "Nguyen Chi Kien",
  age: 20,
  gender: true,
  nationality: "Viet Nam",
  hobbies: [
    "Researching",
    "Reading Books",
    "Coding",
    "Designing",
    "Listening to Jazz,Piano,Ed Sheeran",
    "Playing Saxophone",
    "Enjoying Kdrama",
    "Playing Guitar",
    "Making a cappuccino",
    "Skateboarding",
  ],
  job: [
    "Software Engineering",
    "UX/UI Designer",
    "Front-end Developer",
    "Game Developer",
    "Graphic Designer",
    "Barista",
    "Skateboarder",
  ],
  education: "FPT University",
};
const dhp: Person = {
  name: "Dao Ha Phuong",
  age: 0,
  gender: false,
  education: "Academy of Journalism and Communication ",
  nationality: "Viet Nam",
  job: [],
  hobbies: [],
};

people.push(chiskien, dhp);
