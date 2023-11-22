## Setup hellow world index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello world</title>
  </head>
  <body>
    <div>
      <span>Hello world</span>
    </div>
  </body>
</html>
```

## !!! Start live server extension !!!

## Create script.js file, add script tag,

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello world</title>

  <script src="./script.js"></script>
</head>
```

## Create hello-name element, get then log element, change to script:defer

```html
<!-- in body tag add another span -->
<body>
  <div>
    <span>Hello</span>
    <span id="hello-name">world</span>
  </div>
</body>
```

```js
// get element by id and log
const helloNameElement = document.getElementById("hello-name");
console.log(helloNameElement);
```

```html
<!-- add defer -->
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello world</title>
  <script src="./script.js" defer></script>
</head>
```

## Assign a random name to the hello name element

```js
const helloNameElement = document.getElementById("hello-name");
const randomName = "Frank";
helloNameElement.innerHTML = randomName;
```

```js
const names = ["alan", "barbara", "chris", "diane", "engelbert"];
const helloNameElement = document.getElementById("hello-name");
const randomName = names[3];
helloNameElement.innerHTML = randomName;
```

## Create a random name generator

```js
const getRandomInt = (min, max) => {
  const difference = max - min;
  return Math.floor(Math.random() * (difference + 1)) + min;
};

const names = ["alan", "barbara", "chris", "diane", "engelbert"];
const helloNameElement = document.getElementById("hello-name");
const randomName = names[getRandomInt(0, names.length - 1)];
helloNameElement.innerHTML = randomName;
```

```js
const getRandomInt = (min, max) => {
  const difference = max - min;
  return Math.floor(Math.random() * (difference + 1)) + min;
};

const getRandomName = (min, max) => {
  const names = ["alan", "barbara", "chris", "diane", "engelbert"];
  return names[getRandomInt(0, names.length - 1)];
};

const helloNameElement = document.getElementById("hello-name");
helloNameElement.innerHTML = getRandomName();
```

## Create monolith.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello world</title>
  </head>
  <body>
    <div>
      <span>Hello</span>
      <span id="hello-name"></span>
    </div>

    <script>
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
    </script>
  </body>
</html>
```

## Compare network tab with slow 3g throttle

## summary

For most people this a refresher, a simple video to explain the basics the we will be using as we move forward through this course
