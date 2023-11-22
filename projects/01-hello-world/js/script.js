const getRandomInt = (min, max) => {
  const difference = max - min;
  return Math.floor(Math.random() * (difference + 1)) + min;
};

const getRandomName = () => {
  const names = ["alan", "barbara", "chris", "diane", "engelbert"];
  return names[getRandomInt(0, names.length - 1)];
};

const helloNameElement = document.getElementById("hello-name");
helloNameElement.innerHTML = getRandomName();
