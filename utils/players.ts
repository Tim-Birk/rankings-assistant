const runningBacks = [
  {
    rank: 1,
    name: "Christian McCaffrey",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18877.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 2,
    name: "Ezekiel Elliott",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17923.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 3,
    name: "Saquon Barkley",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19766.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 4,
    name: "Dalvin Cook ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18872.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 5,
    name: "Derrick Henry",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17959.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 6,
    name: "Alvin Kamara",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18878.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 7,
    name: "Clyde Edwards-Helaire ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20824.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 8,
    name: "Josh Jacobs",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18858.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 9,
    name: "Joe Mixon",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19045.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 10,
    name: "Aaron Jones ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18003.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 11,
    name: "Kenyan Drake ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20933.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 12,
    name: "Miles Sanders ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19798.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 13,
    name: "Nick Chubb",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19562.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 14,
    name: "Austin Ekeler",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16847.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 15,
    name: "David Johnson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14967.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 16,
    name: "Le'Veon Bell",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16776.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 17,
    name: "Melvin Gordon III",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19119.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 18,
    name: "Chris Carson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16771.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 19,
    name: "Todd Gurley II",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18983.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 20,
    name: "James Conner",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20882.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 21,
    name: "David Montgomery",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18803.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 22,
    name: "Leonard Fournette",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13337.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 23,
    name: "Mark Ingram II",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20941.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 24,
    name: "Devin Singletary",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17217.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 25,
    name: "Raheem Mostert",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19861.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 26,
    name: "Ronald Jones II ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18944.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 27,
    name: "Jonathan Taylor",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18067.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 28,
    name: "Cam Akers",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19828.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 29,
    name: "Kareem Hunt",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16056.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 30,
    name: "Jordan Howard",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16834.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 31,
    name: "D'Andre Swift",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19822.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 32,
    name: "Sony Michel ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20128.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 33,
    name: "James White",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19797.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 34,
    name: "Tevin Coleman",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19003.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 35,
    name: "Kerryon Johnson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15071.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 36,
    name: "Phillip Lindsay",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18998.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 37,
    name: "Derrius Guice",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19912.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 38,
    name: "Tarik Cohen",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16838.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 39,
    name: "Latavius Murray",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15102.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 40,
    name: "Boston Scott",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19319.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 41,
    name: "Marlon Mack",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20868.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 42,
    name: "Zack Moss",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18995.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 43,
    name: "J.K. Dobbins",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19919.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 44,
    name: "Nyheim Hines",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20912.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 45,
    name: "Duke Johnson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg4807.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 46,
    name: "Chris Thompson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20798.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 47,
    name: "Ke'Shawn Vaughn ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg5820.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 48,
    name: "Matt Breida",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20064.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 49,
    name: "Alexander Mattison",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20950.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 50,
    name: "Antonio Gibson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18690.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 51,
    name: "Jamaal Williams ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17053.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 52,
    name: "Chase Edmonds",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14916.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 53,
    name: "Tony Pollard",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19799.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 54,
    name: "Adrian Peterson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19924.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 55,
    name: "Darrell Henderson Jr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16510.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 56,
    name: "Frank Gore",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16668.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 57,
    name: "Justin Jackson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19033.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 58,
    name: "Benny Snell Jr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18375.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 59,
    name: "Jalen Richard",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20802.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 60,
    name: "Malcolm Brown",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18061.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 61,
    name: "A.J. Dillon ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 62,
    name: "Giovani Bernard",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 63,
    name: "Joshua Kelley",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 64,
    name: "Anthony McFarland Jr.",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 65,
    name: "Darrynton Evans",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 66,
    name: "Rashaad Penny",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 67,
    name: "Ito Smith",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 68,
    name: "Jerick McKinnon ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 69,
    name: "Gus Edwards",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 70,
    name: "Lynn Bowden Jr. ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 71,
    name: "Jaylen Samuels ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 72,
    name: "Carlos Hyde ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 73,
    name: "Brian Hill",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 74,
    name: "Peyton Barber ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 75,
    name: "Justice Hill",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 76,
    name: "DeeJay Dallas ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 77,
    name: "DeAndre Washington ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 78,
    name: "Eno Benjamin ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 79,
    name: "Reggie Bonnafon ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 80,
    name: "Lamical Perine ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
];

const wideReceivers = [
  {
    rank: 1,
    name: "Michael Thomas",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17960.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 2,
    name: "Davante Adams ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16470.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 3,
    name: "Julio Jones",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13291.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 4,
    name: "Tyreek Hill",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18082.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 5,
    name: "Chris Godwin",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18880.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 6,
    name: "Kenny Golladay",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18977.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 7,
    name: "Amari Cooper",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16765.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 8,
    name: "DeAndre Hopkins",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14986.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 9,
    name: "D.J. Moore",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19844.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 10,
    name: "Robert Woods",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14871.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 11,
    name: "Adam Thielen",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15534.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 12,
    name: "Cooper Kupp",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18882.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 13,
    name: "Allen Robinson II",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16263.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 14,
    name: "Mike Evans",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16597.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 15,
    name: "DJ Chark Jr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19816.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 16,
    name: "A.J. Brown",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21042.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 17,
    name: "Calvin Ridley",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19802.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 18,
    name: "JuJu Smith-Schuster",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18883.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 19,
    name: "Odell Beckham Jr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16389.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 20,
    name: "T.Y. Hilton",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14005.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 21,
    name: "DeVante Parker",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16775.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 22,
    name: "Tyler Lockett",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16830.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 23,
    name: "A.J. Green",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg12845.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 24,
    name: "Courtland Sutton",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19800.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 25,
    name: "Stefon Diggs",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16906.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 26,
    name: "Michael Gallup",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19867.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 27,
    name: "Keenan Allen ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15076.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 28,
    name: "Terry McLaurin",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20873.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 29,
    name: "Marvin Jones Jr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13870.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 30,
    name: "DK Metcalf",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21045.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 31,
    name: "Marquise Brown",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16020.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 32,
    name: "Jarvis Landry",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17961.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 33,
    name: "Sterling Shepard",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16866.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 34,
    name: "Jamison Crowder",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg8355.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 35,
    name: "Julian Edelman",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20932.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 36,
    name: "Deebo Samuel",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17916.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 37,
    name: "Will Fuller V",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17986.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 38,
    name: "Tyler Boyd",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20943.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 39,
    name: "Darius Slayton",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg11063.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 40,
    name: "Emmanuel Sanders",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16568.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 41,
    name: "Brandin Cooks",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg11611.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 42,
    name: "Golden Tate",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21077.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 43,
    name: "Diontae Johnson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18914.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 44,
    name: "Mike Williams",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19864.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 45,
    name: "Preston Williams",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16003.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 46,
    name: "Anthony Miller",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16640.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 47,
    name: "Sammy Watkins",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20924.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 48,
    name: "John Brown",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18187.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 49,
    name: "Hunter Renfrow",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19815.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 50,
    name: "CeeDee Lamb",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20145.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 51,
    name: "Robby Anderson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg3943.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 52,
    name: "Christian Kirk ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18992.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 53,
    name: "N'Keal Harry",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg5571.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 54,
    name: "Allen Lazard ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18928.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 55,
    name: "Michael Pittman Jr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17048.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 56,
    name: "DeSean Jackson ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14141.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 57,
    name: "Dede Westbrook",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14187.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 58,
    name: "Larry Fitzgerald",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16787.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 59,
    name: "Jerry Jeudy",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18879.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 60,
    name: "Curtis Samuel",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20788.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 61,
    name: "Justin Jefferson",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13227.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 62,
    name: "Tyrell Williams",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg9906.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 63,
    name: "Cole Beasley",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19865.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 64,
    name: "Alshon Jeffery ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13878.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 65,
    name: "Jalen Reagor ",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17290.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 66,
    name: "Breshad Perriman",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16837.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 67,
    name: "Denzel Mims",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16308.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 68,
    name: "Corey Davis",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21005.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 69,
    name: "Henry Ruggs III",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18881.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 70,
    name: "Mecole Hardman",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15196.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 71,
    name: "Brandon Aiyuk",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/usat16790.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 72,
    name: "Randall Cobb",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19064.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 73,
    name: "Tee Higgins",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20820.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 74,
    name: "Danny Amendola",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21037.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 75,
    name: "James Washington",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19897.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 76,
    name: "Mohamed Sanu Sr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg12109.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 77,
    name: "Laviska Shenault Jr.",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19514.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 78,
    name: "Adam Humphries",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 79,
    name: "Chris Conley",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 80,
    name: "Russell Gage",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 81,
    name: "Albert Wilson",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 82,
    name: "Parris Campbell",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 83,
    name: "John Ross III",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 84,
    name: "Kenny Stills",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 85,
    name: "Antonio Gandy-Golden",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 86,
    name: "Phillip Dorsett II ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 87,
    name: "Chase Claypool",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 88,
    name: "K.J. Hamler",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 89,
    name: "Trent Taylor",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 90,
    name: "Andy Isabella",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 91,
    name: "Miles Boykin",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 92,
    name: "Van Jefferson",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 93,
    name: "Bisi Johnson",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 94,
    name: "Tre'Quan Smith ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 95,
    name: "Ted Ginn Jr. ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 96,
    name: "Jalen Hurd",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 97,
    name: "Bryan Edwards ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 98,
    name: "Hakeem Butler",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 99,
    name: "Keelan Cole ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 100,
    name: "Donovan Peoples-Jones ",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
];

const Players = { runningBacks, wideReceivers };

export default Players;
