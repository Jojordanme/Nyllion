const boyNames = [
  "James", "John", "William", "David", "Joseph", "Michael", "Daniel", "Matthew", "Christopher", "Andrew",
  "Joshua", "Benjamin", "Samuel", "Charles", "Thomas", "Henry", "Ethan", "Alexander", "Jack", "Ryan",
  "Lucas", "Nathan", "Jacob", "Gabriel", "Liam", "Caleb", "Aaron", "Dylan", "Elijah", "Carter",
  "Mason", "Isaac", "Owen", "Luke", "Zachary", "Tyler", "Adam", "Ryan", "Connor", "Aiden","Falco","Falco",
  "Jack", "Max", "Evan", "Johnathan", "Blake", "Isaiah", "Sebastian", "Hunter", "Nathaniel", "Thomas",
  "Austin", "Jordan", "Kyle", "Cameron", "Levi", "Nicholas", "Christopher", "Logan", "Alex", "Brock",
  "Calvin", "Julian", "Miles", "Wyatt", "Victor", "Eli", "Caden", "Jordan", "Matthew", "Gavin",
  "Robert", "Austin", "Victor", "Eli", "Tyler", "Gabriel", "Dominic", "Francis", "Henry", "Julian",
  "Silas", "Seth", "Jaxon", "Cole", "Riley", "Adrian", "Dean", "Landon", "Tyson", "Nolan",
  "Brandon", "Blake", "Chase", "Carter", "Derek", "Jace", "Kai", "Milo", "Felix", "Theo",
  "Reid", "Asher", "Miles", "Zane", "Cole", "Jude", "Jasper", "Harvey", "Soren", "Roman",
  "Cody", "Jack", "Zane", "Drew", "Spencer", "Mason", "Levi", "Graham", "Aaron", "Jared","Nelson","Damien"
];


const girlNames = [
  "Emma", "Olivia", "Ava", "Sophia", "Isabella", "Mia", "Amelia", "Harper", "Evelyn", "Abigail",
  "Ella", "Scarlett", "Grace", "Chloe", "Aria", "Layla", "Riley", "Zoey", "Lily", "Nora",
  "Hezel", "Penelope", "Lillian", "Addison", "Charlotte", "Sofia", "Avery", "Lila", "Audrey",
  "Victoria", "Stella", "Hannah", "Alice", "Elizabeth", "Ella", "Camila", "Sadie", "Leah", "Mila",
  "Eleanor", "Scarlett", "Violet", "Brooklyn", "Zoe", "Nina", "Skylar", "Bella", "Samantha", "Avery",
  "Lucy", "Savannah", "Grace", "Aubrey", "Maya", "Kinsley", "Everly", "Ruby", "Peyton", "Delilah",
  "Eliza", "Maya", "Gianna", "Caroline", "Kennedy", "Sophie", "Julia", "Autumn", "Quinn", "Cora",
  "Lydia", "Naomi", "Madeline", "Elena", "Claire", "Ivy", "Archer", "Ariana", "Alicia", "Bailey",
  "Holly", "Lacey", "Marley", "Catherine", "Julia", "Rory", "Roxanne", "Allison", "Addison", "Lily",
  "Brianna", "Jasmine", "Sierra", "Savannah", "Gwendolyn", "Holly", "Maria", "Katherine", "Piper", "Aurora",
  "Emery", "Ruby", "Sienna", "Sophie", "Dakota", "Eva", "Tessa", "Isabel", "Megan", "Adeline",
  "Jade", "Rory", "Willow", "Georgia", "Vivian", "Tatum", "Vivienne", "Arabella", "Riley", "Aspen","Janet","Sylvi"
];

export function getRandomName(gender){
  var name
  if (gender == 1){
    name = girlNames[Math.floor(Math.random() * girlNames.length)];
  } else {
    name = boyNames[Math.floor(Math.random() * boyNames.length)];
  }
  return name
}

