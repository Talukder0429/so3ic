export interface Inventor {
  inventor: string;
  skill: number;
  time: number;
  cost: number;
}

const alchInventors: Inventor[] = [
  {
    inventor: "Adray",
    skill: 4,
    time: -25,
    cost: 30,
  },
  {
    inventor: "Albel",
    skill: 15,
    time: 0,
    cost: 5,
  },
  {
    inventor: "Ansala",
    skill: 99,
    time: -20,
    cost: 0,
  },
  {
    inventor: "Cliff",
    skill: 5,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Eliza",
    skill: 4,
    time: -30,
    cost: 0,
  },
  {
    inventor: "Fayt",
    skill: 14,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Mackwell",
    skill: 31,
    time: 40,
    cost: 0,
  },
  {
    inventor: "Maria",
    skill: 22,
    time: 0,
    cost: -10,
  },
  {
    inventor: "Mirage",
    skill: 18,
    time: -5,
    cost: -5,
  },
  {
    inventor: "Misty Lear",
    skill: 50,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Nel",
    skill: 20,
    time: -5,
    cost: 0,
  },
  {
    inventor: "Peppita",
    skill: 12,
    time: -10,
    cost: 10,
  },
  {
    inventor: "Roger",
    skill: 6,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Sophia",
    skill: 36,
    time: 0,
    cost: -5,
  },
];

const cmpdInventors: Inventor[] = [
  {
    inventor: "Adray",
    skill: 5,
    time: -25,
    cost: 30,
  },
  {
    inventor: "Albel",
    skill: 16,
    time: 0,
    cost: 5,
  },
  {
    inventor: "Cliff",
    skill: 10,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Fayt",
    skill: 30,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Gossam",
    skill: 9,
    time: 0,
    cost: 20,
  },
  {
    inventor: "Louise the Diviner",
    skill: 98,
    time: 30,
    cost: 0,
  },
  {
    inventor: "Maria",
    skill: 25,
    time: 0,
    cost: -10,
  },
  {
    inventor: "Milenya",
    skill: 19,
    time: 0,
    cost: -20,
  },
  {
    inventor: "Mirage",
    skill: 27,
    time: -5,
    cost: -5,
  },
  {
    inventor: "Nel",
    skill: 10,
    time: -5,
    cost: 0,
  },
  {
    inventor: "Peppita",
    skill: 11,
    time: -10,
    cost: 10,
  },
  {
    inventor: "Puffy",
    skill: 57,
    time: -40,
    cost: 0,
  },
  {
    inventor: "Roger",
    skill: 6,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Sophia",
    skill: 15,
    time: 0,
    cost: -5,
  },
];

const cookInventors: Inventor[] = [
  {
    inventor: "Adray",
    skill: 20,
    time: -25,
    cost: 30,
  },
  {
    inventor: "Albel",
    skill: 16,
    time: 0,
    cost: 5,
  },
  {
    inventor: "Cliff",
    skill: 9,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Damda Mooda",
    skill: 9,
    time: 0,
    cost: 10,
  },
  {
    inventor: "Fayt",
    skill: 16,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Maria",
    skill: 19,
    time: 0,
    cost: -10,
  },
  {
    inventor: "Mayu",
    skill: 19,
    time: 0,
    cost: -30,
  },
  {
    inventor: "Mirage",
    skill: 26,
    time: -5,
    cost: -5,
  },
  {
    inventor: "Nel",
    skill: 30,
    time: -5,
    cost: 0,
  },
  {
    inventor: "Peppita",
    skill: 6,
    time: -10,
    cost: 10,
  },
  {
    inventor: "Rigel",
    skill: 57,
    time: 40,
    cost: 0,
  },
  {
    inventor: "Roger",
    skill: 2,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Sophia",
    skill: 43,
    time: 0,
    cost: -5,
  },
  {
    inventor: "The Killer Chef",
    skill: 98,
    time: -30,
    cost: 0,
  },
];

const crftInventors: Inventor[] = [
  {
    inventor: "Adray",
    skill: 3,
    time: -25,
    cost: 30,
  },
  {
    inventor: "Albel",
    skill: 12,
    time: 0,
    cost: 5,
  },
  {
    inventor: "Aqua & Evia",
    skill: 49,
    time: 0,
    cost: 10,
  },
  {
    inventor: "Balbados",
    skill: 37,
    time: -40,
    cost: 50,
  },
  {
    inventor: "Chilico",
    skill: 60,
    time: 60,
    cost: -10,
  },
  {
    inventor: "Cliff",
    skill: 2,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Fayt",
    skill: 20,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Maria",
    skill: 10,
    time: 0,
    cost: -10,
  },
  {
    inventor: "Mirage",
    skill: 30,
    time: -5,
    cost: -5,
  },
  {
    inventor: "Nel",
    skill: 15,
    time: -5,
    cost: 0,
  },
  {
    inventor: "Peppita",
    skill: 40,
    time: -10,
    cost: 10,
  },
  {
    inventor: "Roger",
    skill: 35,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Sophia",
    skill: 33,
    time: 0,
    cost: -5,
  },
  {
    inventor: "Stanice",
    skill: 20,
    time: -30,
    cost: -20,
  },
];

const engInventors: Inventor[] = [
  {
    inventor: "Adray",
    skill: 7,
    time: -25,
    cost: 30,
  },
  {
    inventor: "Albel",
    skill: 16,
    time: 0,
    cost: 5,
  },
  {
    inventor: "Cliff",
    skill: 36,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Dejison",
    skill: 6,
    time: -20,
    cost: 40,
  },
  {
    inventor: "Fayt",
    skill: 25,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Izak",
    skill: 65,
    time: -50,
    cost: 0,
  },
  {
    inventor: "Maria",
    skill: 20,
    time: 0,
    cost: -10,
  },
  {
    inventor: "Meryl",
    skill: 46,
    time: 30,
    cost: 0,
  },
  {
    inventor: "Mirage",
    skill: 31,
    time: -5,
    cost: -5,
  },
  {
    inventor: "Nel",
    skill: 5,
    time: -5,
    cost: 0,
  },
  {
    inventor: "Peppita",
    skill: 15,
    time: -10,
    cost: 10,
  },
  {
    inventor: "Roger",
    skill: 20,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Sophia",
    skill: 3,
    time: 0,
    cost: -5,
  },
  {
    inventor: "Vanilla",
    skill: 32,
    time: 0,
    cost: 30,
  },
];

const smthInventors: Inventor[] = [
  {
    inventor: "Adray",
    skill: 27,
    time: -25,
    cost: 30,
  },
  {
    inventor: "Albel",
    skill: 30,
    time: 0,
    cost: 5,
  },
  {
    inventor: "Boyd",
    skill: 95,
    time: 50,
    cost: 0,
  },
  {
    inventor: "Cliff",
    skill: 31,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Fayt",
    skill: 29,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Grats",
    skill: 25,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Gusto",
    skill: 60,
    time: -20,
    cost: 0,
  },
  {
    inventor: "Lias",
    skill: 36,
    time: 0,
    cost: 20,
  },
  {
    inventor: "Maria",
    skill: 4,
    time: 0,
    cost: -10,
  },
  {
    inventor: "Mirage",
    skill: 17,
    time: -5,
    cost: -5,
  },
  {
    inventor: "Nel",
    skill: 25,
    time: -5,
    cost: 0,
  },
  {
    inventor: "Peppita",
    skill: 5,
    time: -10,
    cost: 10,
  },
  {
    inventor: "Roger",
    skill: 23,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Sophia",
    skill: 6,
    time: 0,
    cost: -5,
  },
];

const writInventors: Inventor[] = [
  {
    inventor: "Adray",
    skill: 11,
    time: -25,
    cost: 30,
  },
  {
    inventor: "Albel",
    skill: 4,
    time: 0,
    cost: 5,
  },
  {
    inventor: "Cliff",
    skill: 7,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Cornelius",
    skill: 15,
    time: -40,
    cost: 0,
  },
  {
    inventor: "Count Noppen",
    skill: 44,
    time: 0,
    cost: 40,
  },
  {
    inventor: "Fayt",
    skill: 34,
    time: 0,
    cost: 0,
  },
  {
    inventor: "Maria",
    skill: 22,
    time: 0,
    cost: -10,
  },
  {
    inventor: "Mirage",
    skill: 16,
    time: -5,
    cost: -5,
  },
  {
    inventor: "Mishell",
    skill: 35,
    time: 0,
    cost: 10,
  },
  {
    inventor: "Nel",
    skill: 14,
    time: -5,
    cost: 0,
  },
  {
    inventor: "Osman the Sage",
    skill: 73,
    time: 40,
    cost: 0,
  },
  {
    inventor: "Peppita",
    skill: 6,
    time: -10,
    cost: 10,
  },
  {
    inventor: "Roger",
    skill: 4,
    time: 5,
    cost: 0,
  },
  {
    inventor: "Sophia",
    skill: 15,
    time: 0,
    cost: -5,
  },
];

const col = [
  {
    name: "Inventor",
    selector: "inventor",
    sortable: true,
    compact: true,
    wrap: true,
    style: { textAlign: "left" },
  },
  {
    name: "Skill",
    selector: "skill",
    sortable: true,
    right: true,
    maxWidth: "8ch",
  },
  {
    name: "Time",
    selector: "time",
    sortable: true,
    format: (row: Inventor) => row.time + "%",
    right: true,
    maxWidth: "8ch",
  },
  {
    name: "Cost",
    selector: "cost",
    sortable: true,
    format: (row: Inventor) => row.cost + "%",
    right: true,
    maxWidth: "8ch",
  },
];

export {
  alchInventors,
  cmpdInventors,
  cookInventors,
  crftInventors,
  engInventors,
  smthInventors,
  writInventors,
  col,
};
