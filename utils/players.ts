const runningBacks = [
  {
    rank: 1,
    name: "Christian McCaffrey",
    info: "CAR (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18877.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 2,
    name: "Ezekiel Elliott",
    info: "DAL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17923.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 3,
    name: "Saquon Barkley",
    info: "NYG (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19766.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 4,
    name: "Dalvin Cook",
    info: "MIN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18872.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 5,
    name: "Clyde Edwards-Helaire",
    info: "KC (10)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 6,
    name: "Alvin Kamara",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18878.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 7,
    name: "Derrick Henry",
    info: "TEN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17959.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 8,
    name: "Josh Jacobs",
    info: "LV (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20824.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 9,
    name: "Miles Sanders",
    info: "PHI (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20933.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 10,
    name: "Kenyan Drake",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18003.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 11,
    name: "Aaron Jones",
    info: "GB (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19045.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 12,
    name: "Joe Mixon",
    info: "CIN (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18858.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 13,
    name: "Nick Chubb",
    info: "CLE (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19798.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 14,
    name: "Austin Ekeler",
    info: "LAC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19562.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 15,
    name: "Le'Veon Bell",
    info: "NYJ (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14967.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 16,
    name: "David Johnson",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16847.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 17,
    name: "Chris Carson",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19119.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 18,
    name: "Melvin Gordon III",
    info: "DEN (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16776.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 19,
    name: "Todd Gurley II",
    info: "ATL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16771.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 20,
    name: "James Conner",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18983.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 21,
    name: "Leonard Fournette",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18803.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 22,
    name: "David Montgomery",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20882.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 23,
    name: "Mark Ingram II",
    info: "BAL (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13337.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 24,
    name: "Devin Singletary",
    info: "BUF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20941.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 25,
    name: "Raheem Mostert",
    info: "SF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17217.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 26,
    name: "Ronald Jones II",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19861.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 27,
    name: "Jonathan Taylor",
    info: "IND (7)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 28,
    name: "Kareem Hunt",
    info: "CLE (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18944.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 29,
    name: "Cam Akers",
    info: "LAR (9)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 30,
    name: "D'Andre Swift",
    info: "DET (5)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 31,
    name: "Jordan Howard",
    info: "MIA (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18067.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 32,
    name: "Tevin Coleman",
    info: "SF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16834.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 33,
    name: "James White",
    info: "NE (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16056.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 34,
    name: "Antonio Gibson",
    info: "WAS (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 35,
    name: "Kerryon Johnson",
    info: "DET (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19822.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 36,
    name: "Phillip Lindsay",
    info: "DEN (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20128.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 37,
    name: "Sony Michel",
    info: "NE (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19828.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 38,
    name: "Tarik Cohen",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19003.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 39,
    name: "Matt Breida",
    info: "MIA (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19319.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 40,
    name: "Latavius Murray",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15071.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 41,
    name: "Boston Scott",
    info: "PHI (9)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 42,
    name: "Marlon Mack",
    info: "IND (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18998.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 43,
    name: "Zack Moss",
    info: "BUF (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 44,
    name: "J.K. Dobbins",
    info: "BAL (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 45,
    name: "Adrian Peterson",
    info: "WAS (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg4807.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 46,
    name: "Nyheim Hines",
    info: "IND (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19912.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 47,
    name: "Duke Johnson",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16838.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 48,
    name: "Chris Thompson",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15102.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 49,
    name: "Ke'Shawn Vaughn",
    info: "TB (13)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 50,
    name: "Alexander Mattison",
    info: "MIN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20868.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 51,
    name: "Jamaal Williams",
    info: "GB (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18995.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 52,
    name: "Chase Edmonds",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19919.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 53,
    name: "Tony Pollard",
    info: "DAL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20912.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 54,
    name: "Darrell Henderson Jr.",
    info: "LAR (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20798.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 55,
    name: "Frank Gore",
    info: "NYJ (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg5820.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 56,
    name: "Justin Jackson",
    info: "LAC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20064.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 57,
    name: "Jalen Richard",
    info: "LV (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18690.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 58,
    name: "Benny Snell Jr.",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20950.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 59,
    name: "Malcolm Brown",
    info: "LAR (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17053.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 60,
    name: "A.J. Dillon",
    info: "GB (5)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 61,
    name: "Giovani Bernard",
    info: "CIN (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14916.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 62,
    name: "Joshua Kelley",
    info: "LAC (10)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 63,
    name: "Darrynton Evans",
    info: "TEN (7)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 64,
    name: "Anthony McFarland Jr.",
    info: "PIT (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 65,
    name: "Rashaad Penny",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19799.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 66,
    name: "Ito Smith",
    info: "ATL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19924.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 67,
    name: "LeSean McCoy",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg11932.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 68,
    name: "Jerick McKinnon",
    info: "SF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16510.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 69,
    name: "Gus Edwards",
    info: "BAL (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 70,
    name: "Jaylen Samuels",
    info: "PIT (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 71,
    name: "Peyton Barber",
    info: "WAS (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18375.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 72,
    name: "Carlos Hyde",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16668.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 73,
    name: "Lynn Bowden Jr.",
    info: "LV (6)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 74,
    name: "Brian Hill",
    info: "ATL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19033.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 75,
    name: "Justice Hill",
    info: "BAL (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20802.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 76,
    name: "DeeJay Dallas",
    info: "SEA (6)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 77,
    name: "DeAndre Washington",
    info: "KC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18061.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 78,
    name: "Reggie Bonnafon",
    info: "CAR (13)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 79,
    name: "Eno Benjamin",
    info: "ARI (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 80,
    name: "Lamical Perine",
    info: "NYJ (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
];

const wideReceivers = [
  {
    rank: 1,
    name: "Michael Thomas",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17960.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 2,
    name: "Davante Adams",
    info: "GB (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16470.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 3,
    name: "Julio Jones",
    info: "ATL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13291.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 4,
    name: "Tyreek Hill",
    info: "KC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18082.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 5,
    name: "Chris Godwin",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18880.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 6,
    name: "Kenny Golladay",
    info: "DET (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18977.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 7,
    name: "Amari Cooper",
    info: "DAL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16765.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 8,
    name: "DeAndre Hopkins",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14986.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 9,
    name: "D.J. Moore",
    info: "CAR (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19844.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 10,
    name: "Robert Woods",
    info: "LAR (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14871.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 11,
    name: "Adam Thielen",
    info: "MIN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15534.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 12,
    name: "Cooper Kupp",
    info: "LAR (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18882.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 13,
    name: "Allen Robinson II",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16263.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 14,
    name: "Mike Evans",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16597.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 15,
    name: "DJ Chark Jr.",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19816.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 16,
    name: "A.J. Brown",
    info: "TEN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21042.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 17,
    name: "Calvin Ridley",
    info: "ATL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19802.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 18,
    name: "Odell Beckham Jr.",
    info: "CLE (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16389.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 19,
    name: "T.Y. Hilton",
    info: "IND (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14005.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 20,
    name: "JuJu Smith-Schuster",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18883.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 21,
    name: "DeVante Parker",
    info: "MIA (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16775.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 22,
    name: "Courtland Sutton",
    info: "DEN (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19800.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 23,
    name: "Tyler Lockett",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16830.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 24,
    name: "A.J. Green",
    info: "CIN (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg12845.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 25,
    name: "Stefon Diggs",
    info: "BUF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16906.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 26,
    name: "Terry McLaurin",
    info: "WAS (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20873.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 27,
    name: "Keenan Allen",
    info: "LAC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15076.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 28,
    name: "Michael Gallup",
    info: "DAL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19867.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 29,
    name: "Marquise Brown",
    info: "BAL (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21045.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 30,
    name: "Marvin Jones Jr.",
    info: "DET (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13870.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 31,
    name: "DK Metcalf",
    info: "SEA (6)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 32,
    name: "Jarvis Landry",
    info: "CLE (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16020.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 33,
    name: "Sterling Shepard",
    info: "NYG (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17961.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 34,
    name: "Jamison Crowder",
    info: "NYJ (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16866.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 35,
    name: "Julian Edelman",
    info: "NE (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg8355.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 36,
    name: "Deebo Samuel",
    info: "SF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20932.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 37,
    name: "Tyler Boyd",
    info: "CIN (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17986.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 38,
    name: "Will Fuller V",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17916.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 39,
    name: "Darius Slayton",
    info: "NYG (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20943.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 40,
    name: "Emmanuel Sanders",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg11063.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 41,
    name: "Golden Tate",
    info: "NYG (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg11611.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 42,
    name: "Brandin Cooks",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16568.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 43,
    name: "Diontae Johnson",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21077.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 44,
    name: "Mike Williams",
    info: "LAC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18914.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 45,
    name: "Anthony Miller",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19864.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 46,
    name: "Preston Williams",
    info: "MIA (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 47,
    name: "Sammy Watkins",
    info: "KC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16003.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 48,
    name: "John Brown",
    info: "BUF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16640.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 49,
    name: "CeeDee Lamb",
    info: "DAL (10)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 50,
    name: "Breshad Perriman",
    info: "NYJ (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16787.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 51,
    name: "Robby Anderson",
    info: "CAR (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18187.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 52,
    name: "Christian Kirk",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19815.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 53,
    name: "N'Keal Harry",
    info: "NE (6)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 54,
    name: "Michael Pittman Jr.",
    info: "IND (7)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 55,
    name: "Allen Lazard",
    info: "GB (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20145.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 56,
    name: "Dede Westbrook",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18992.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 57,
    name: "Larry Fitzgerald",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg5571.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 58,
    name: "Jerry Jeudy",
    info: "DEN (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 59,
    name: "Tyrell Williams",
    info: "LV (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17048.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 60,
    name: "DeSean Jackson",
    info: "PHI (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg3943.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 61,
    name: "Curtis Samuel",
    info: "CAR (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18928.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 62,
    name: "Cole Beasley",
    info: "BUF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14141.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 63,
    name: "Alshon Jeffery",
    info: "PHI (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14187.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 64,
    name: "Jalen Reagor",
    info: "PHI (9)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 65,
    name: "Hunter Renfrow",
    info: "LV (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20924.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 66,
    name: "Henry Ruggs III",
    info: "LV (6)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 67,
    name: "Justin Jefferson",
    info: "MIN (7)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 68,
    name: "Corey Davis",
    info: "TEN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18879.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 69,
    name: "Mecole Hardman",
    info: "KC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20788.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 70,
    name: "Brandon Aiyuk",
    info: "SF (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 71,
    name: "Randall Cobb",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13227.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 72,
    name: "Tee Higgins",
    info: "CIN (9)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 73,
    name: "Danny Amendola",
    info: "DET (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg9906.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 74,
    name: "Denzel Mims",
    info: "NYJ (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 75,
    name: "Mohamed Sanu Sr.",
    info: "NE (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13878.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 76,
    name: "James Washington",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19865.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 77,
    name: "Laviska Shenault Jr.",
    info: "JAX (7)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 78,
    name: "Adam Humphries",
    info: "TEN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17290.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 79,
    name: "Chris Conley",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16837.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 80,
    name: "Russell Gage",
    info: "ATL (10)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 81,
    name: "Parris Campbell",
    info: "IND (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21005.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 82,
    name: "John Ross III",
    info: "CIN (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18881.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 83,
    name: "Kenny Stills",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15196.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 84,
    name: "Antonio Gandy-Golden",
    info: "WAS (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 85,
    name: "Phillip Dorsett II",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/usat16790.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 86,
    name: "Chase Claypool",
    info: "PIT (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 87,
    name: "K.J. Hamler",
    info: "DEN (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 88,
    name: "Bisi Johnson",
    info: "MIN (7)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 89,
    name: "Trent Taylor",
    info: "SF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19064.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 90,
    name: "Andy Isabella",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20820.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 91,
    name: "Miles Boykin",
    info: "BAL (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg21037.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 92,
    name: "Van Jefferson",
    info: "LAR (9)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 93,
    name: "Bryan Edwards",
    info: "LV (6)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 94,
    name: "Tre'Quan Smith",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19897.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 95,
    name: "Ted Ginn Jr.",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg12109.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 96,
    name: "Jalen Hurd",
    info: "SF (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 97,
    name: "Hakeem Butler",
    info: "ARI (8)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 98,
    name: "Keelan Cole",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19514.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 99,
    name: "Donovan Peoples-Jones",
    info: "CLE (9)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
];

const quarterBacks = [
  {
    rank: 1,
    name: "Lamar Jackson",
    info: "BAL (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19781.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 2,
    name: "Patrick Mahomes",
    info: "KC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18890.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 3,
    name: "Dak Prescott",
    info: "DAL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18055.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 4,
    name: "Kyler Murray",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20889.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 5,
    name: "Russell Wilson",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14536.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 6,
    name: "Drew Brees",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg7242.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 7,
    name: "Deshaun Watson",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18857.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 8,
    name: "Carson Wentz",
    info: "PHI (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17920.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 9,
    name: "Josh Allen",
    info: "BUF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19801.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 10,
    name: "Matthew Stafford",
    info: "DET (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg9038.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 11,
    name: "Tom Brady",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg4314.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 12,
    name: "Aaron Rodgers",
    info: "GB (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg2593.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 13,
    name: "Matt Ryan",
    info: "ATL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg732.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 14,
    name: "Daniel Jones",
    info: "NYG (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20841.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 15,
    name: "Ben Roethlisberger",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg3807.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 16,
    name: "Cam Newton",
    info: "NE (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13320.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 17,
    name: "Ryan Tannehill",
    info: "TEN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13799.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 18,
    name: "Kirk Cousins",
    info: "MIN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14252.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 19,
    name: "Jared Goff",
    info: "LAR (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17922.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 20,
    name: "Gardner Minshew II",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20880.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 21,
    name: "Joe Burrow",
    info: "CIN (9)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 22,
    name: "Derek Carr",
    info: "LV (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16311.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 23,
    name: "Baker Mayfield",
    info: "CLE (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19790.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 24,
    name: "Philip Rivers",
    info: "IND (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg8244.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 25,
    name: "Jimmy Garoppolo",
    info: "SF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16041.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 26,
    name: "Sam Darnold",
    info: "NYJ (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19812.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 27,
    name: "Drew Lock",
    info: "DEN (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20859.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 28,
    name: "Teddy Bridgewater",
    info: "CAR (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16497.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 29,
    name: "Dwayne Haskins Jr.",
    info: "WAS (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20795.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 30,
    name: "Ryan Fitzpatrick",
    info: "MIA (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg8283.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 31,
    name: "Nick Foles",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13723.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 32,
    name: "Justin Herbert",
    info: "LAC (10)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 33,
    name: "Tyrod Taylor",
    info: "LAC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg12831.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 34,
    name: "Mitchell Trubisky",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18811.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 35,
    name: "Tua Tagovailoa",
    info: "MIA (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 36,
    name: "Jarrett Stidham",
    info: "NE (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20954.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 37,
    name: "Taysom Hill",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19238.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
];

const tightEnds = [
  {
    rank: 1,
    name: "Travis Kelce",
    info: "KC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15048.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 2,
    name: "George Kittle",
    info: "SF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19063.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 3,
    name: "Mark Andrews",
    info: "BAL (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19803.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 4,
    name: "Zach Ertz",
    info: "PHI (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14856.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 5,
    name: "Darren Waller",
    info: "LV (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16964.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 6,
    name: "Jared Cook",
    info: "NO (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg8534.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 7,
    name: "Mike Gesicki",
    info: "MIA (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19853.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 8,
    name: "Tyler Higbee",
    info: "LAR (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18032.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 9,
    name: "Evan Engram",
    info: "NYG (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18912.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 10,
    name: "Hunter Henry",
    info: "LAC (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17975.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 11,
    name: "Jonnu Smith",
    info: "TEN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18990.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 12,
    name: "Noah Fant",
    info: "DEN (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20753.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 13,
    name: "Hayden Hurst",
    info: "ATL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19843.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 14,
    name: "Rob Gronkowski",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg10974.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 15,
    name: "Jack Doyle",
    info: "IND (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15602.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 16,
    name: "Austin Hooper",
    info: "CLE (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg17963.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 17,
    name: "Eric Ebron",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16451.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 18,
    name: "Blake Jarwin",
    info: "DAL (10)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19457.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 19,
    name: "Chris Herndon",
    info: "NYJ (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19947.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 20,
    name: "T.J. Hockenson",
    info: "DET (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20805.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 21,
    name: "Dallas Goedert",
    info: "PHI (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19863.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 22,
    name: "Greg Olsen",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg1658.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 23,
    name: "Irv Smith Jr.",
    info: "MIN (7)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 24,
    name: "Darren Fells",
    info: "HOU (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15247.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 25,
    name: "Kyle Rudolph",
    info: "MIN (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg13275.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 26,
    name: "Tyler Eifert",
    info: "JAX (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg14918.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 27,
    name: "Gerald Everett",
    info: "LAR (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18935.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 28,
    name: "Dawson Knox",
    info: "BUF (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20850.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 29,
    name: "Jace Sternberger",
    info: "GB (5)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg20952.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 30,
    name: "Jimmy Graham",
    info: "CHI (11)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg11488.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 31,
    name: "Dan Arnold",
    info: "ARI (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19659.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 32,
    name: "Ian Thomas",
    info: "CAR (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19910.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 33,
    name: "O.J. Howard",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18901.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 34,
    name: "Will Dissly",
    info: "SEA (6)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19950.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 35,
    name: "Trey Burton",
    info: "IND (7)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15965.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 36,
    name: "David Njoku",
    info: "CLE (9)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg18876.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 37,
    name: "Jeremy Sprinkle",
    info: "WAS (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg19067.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 38,
    name: "Vance McDonald",
    info: "PIT (8)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg15239.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 39,
    name: "Cole Kmet",
    info: "CHI (11)",
    image: null,
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
  {
    rank: 40,
    name: "Cameron Brate",
    info: "TB (13)",
    image:
      "https://cloud.thefantasyfootballers.com/images/app-square-sm/headshots/fdbg16593.jpg",
    playersAhead: Array(0),
    playersBehind: Array(0),
  },
];

const Players = { runningBacks, wideReceivers, quarterBacks, tightEnds };

export default Players;