const getRandomInt = (min, max) => {
  const difference = max - min;
  return Math.floor(Math.random() * (difference + 1)) + min;
};

const names = ["alan", "barbara", "chris", "diane", "engelbert"];
const initiate = () => {
  const helloNameElement = document.getElementById("hello-name");
  const randomInt = getRandomInt(0, names.length - 1);
  const randomName = names[randomInt];
  helloNameElement.innerHTML = randomName;
};

initiate();
